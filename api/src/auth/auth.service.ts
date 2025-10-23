import { Injectable } from '@nestjs/common';
import { AuthRepository } from './repository/auth.repository';
import { SendOtpEmail } from './use-cases/send-code-opt-email';
import { SendOtpSms } from './use-cases/send-code-opt-sms';
import { SendOtpWhatsapp } from './use-cases/send-code-opt-whatsapp';

@Injectable()
export class AuthService {
  constructor(
    private readonly repository: AuthRepository,
    private readonly sendEmail: SendOtpEmail,
    private readonly sendSMS: SendOtpSms,
    private readonly sendWhatsapp: SendOtpWhatsapp,
  ) {}

  public async generateOptCode(
    method: string,
    email: string,
    phoneNumber?: string,
  ) {
    const user = await this.repository.findUser({ email: email });
    if (!user) {
      throw new Error();
    }

    const optCode = this.generate6DigitCode();
    let expirationDate: Date | null = null;

    if (method === 'email') {
      const { expiresAt } = await this.sendEmail.execute(email, optCode);
      expirationDate = expiresAt;
      return true;
    }

    if (method === 'sms') {
      const { expiresAt } = await this.sendSMS.execute(email, optCode);
      expirationDate = expiresAt;
      return true;
    }

    if (method === 'whatsapp') {
      const { expiresAt } = await this.sendWhatsapp.execute(email, optCode);
      expirationDate = expiresAt;
      return true;
    }

    await this.repository.genOptCode({
      method: method,
      otpCode: optCode,
      id_usuario: user.id,
      otpExpiresAt: expirationDate,
    });
  }

  private generate6DigitCode(): string {
    const n = Math.floor(Math.random() * 1_000_000);
    return n.toString().padStart(6, '0');
  }
}
