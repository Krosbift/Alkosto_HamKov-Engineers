// api/src/auth/use-cases/send-otp-sms.ts
import { Injectable, Logger } from '@nestjs/common';
import { Twilio } from 'twilio';

// Si instalaste libphonenumber-js, descomenta y úsalo en ensureValidPhone()
// import { parsePhoneNumber } from 'libphonenumber-js';

export interface TwilioSmsConfig {
  accountSid: string;
  authToken: string;
  from: string; // Número remitente de Twilio (E.164), p.ej. +12025550123
  appName?: string; // Para asunto/cuerpo (branding)
  ttlMinutes?: number; // TTL del código (default: 10)
}

/**
 * Servicio para enviar OTP de 6 dígitos por SMS usando Twilio.
 */
@Injectable()
export class SendOtpSms {
  private readonly logger = new Logger(SendOtpSms.name);
  private readonly client: Twilio;
  private readonly appName: string;
  private readonly from: string;
  private readonly ttlMinutes: number;

  constructor(private readonly cfg: TwilioSmsConfig) {
    this.client = new Twilio(cfg.accountSid, cfg.authToken);
    this.appName = cfg.appName ?? 'Verificación';
    this.from = cfg.from;
    this.ttlMinutes = cfg.ttlMinutes ?? 10;
  }

  async execute(
    phone: string,
    code: string,
  ): Promise<{ code: string; expiresAt: Date }> {
    this.ensureValidPhone(phone);

    const expiresAt = new Date(Date.now() + this.ttlMinutes * 180_000);

    const body = this.renderBody(code);

    try {
      await this.client.messages.create({
        to: phone,
        from: this.from,
        body,
      });

      this.logger.log(`OTP por SMS enviado a ${phone}`);
      return { code, expiresAt };
    } catch (err: any) {
      this.logger.error(
        `Error Twilio SMS a ${phone}: ${err?.code ?? ''} ${err?.message ?? err}`,
      );
      throw new Error(this.humanizeTwilioError(err));
    }
  }

  private renderBody(code: string): string {
    return `${this.appName}: Tu código es ${code}. Expira en ${this.ttlMinutes} minutos. Si no lo solicitaste, ignora este mensaje.`;
  }

  private ensureValidPhone(phone: string): void {
    const e164 = /^\+[1-9]\d{6,14}$/;
    if (!e164.test(phone)) {
      throw new Error(
        'Número de teléfono inválido. Usa formato E.164, p. ej. +573001234567',
      );
    }
  }

  private humanizeTwilioError(err: any): string {
    const code = err?.code;
    switch (code) {
      case 21608:
        return 'El remitente (from) no está verificado o no es válido para SMS.';
      case 21610:
        return 'El destinatario se desuscribió (STOP).';
      case 21211:
        return 'Número de destino inválido.';
      case 21606:
        return 'El remitente no puede enviar a este país o número.';
      default:
        return 'No se pudo enviar el SMS de verificación.';
    }
  }
}
