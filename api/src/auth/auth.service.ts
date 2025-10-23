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

  public async validOptCode(optCode: string, email: string, method: string) {
    const user = await this.repository.findUser({ email });
    if (!user) {
      return false;
    }

    const optData = await this.repository.readOptCode({
      id_usuario: user.id,
      method,
      verified: 'N',
    });

    if (!optData || optData.length === 0) {
      return false;
    }

    const regOptCode = optData.find(reg => reg.otpCode === optCode);
    if (!Boolean(regOptCode) || !regOptCode) {
      return false;
    }

    const updateReg = await this.repository.updateOptCode(regOptCode.id, {
      verified: 'S',
    });
    return Boolean(updateReg);
  }

  public async generateOptCode(
    method: string,
    email: string,
    phoneNumber?: string,
  ) {
    const user = await this.repository.findUser({ email: email });
    if (!user) {
      return false;
    }

    const optCode = this.generate6DigitCode();
    let expirationDate: Date | null = null;

    if (method === 'email') {
      const { expiresAt } = await this.sendEmail.execute(email, optCode);
      expirationDate = expiresAt;
    }

    if (method === 'sms' && phoneNumber) {
      const { expiresAt } = await this.sendSMS.execute(phoneNumber, optCode);
      expirationDate = expiresAt;
    }

    if (method === 'whatsapp' && phoneNumber) {
      const { expiresAt } = await this.sendWhatsapp.execute(
        phoneNumber,
        optCode,
      );
      expirationDate = expiresAt;
    }

    await this.repository.genOptCode({
      method: method,
      otpCode: optCode,
      id_usuario: user.id,
      otpExpiresAt: expirationDate,
    });

    return true;
  }

  private generate6DigitCode(): string {
    const n = Math.floor(Math.random() * 1_000_000);
    return n.toString().padStart(6, '0');
  }
}
