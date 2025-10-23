import { Injectable, Logger } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';

export interface GmailConfig {
  user: string;
  pass: string;
  from?: string;
  appName?: string;
  ttlMinutes?: number;
}

@Injectable()
export class SendOtpEmail {
  private readonly transporter: Transporter;
  private readonly logger = new Logger(SendOtpEmail.name);
  private readonly appName: string;
  private readonly from: string;
  private readonly ttlMinutes: number;

  constructor(private readonly gmail: GmailConfig) {
    this.transporter = createTransport({
      service: 'gmail',
      auth: {
        user: gmail.user,
        pass: gmail.pass,
      },
    });

    this.appName = gmail.appName ?? 'Verificación';
    this.from = gmail.from ?? `${this.appName} <${gmail.user}>`;
    this.ttlMinutes = gmail.ttlMinutes ?? 10;
  }

  async execute(
    email: string,
    code: string,
  ): Promise<{ code: string; expiresAt: Date }> {
    this.ensureValidEmail(email);

    const expiresAt = new Date(Date.now() + this.ttlMinutes * 180_000);

    const subject = `${this.appName} - Tu código es ${code}`;
    const text = this.renderText(code);
    const html = this.renderHtml(code);

    try {
      await this.transporter.sendMail({
        from: this.from,
        to: email,
        subject,
        text,
        html,
      });

      this.logger.log(`Código enviado a ${email}`);
      return { code, expiresAt };
    } catch (error) {
      this.logger.error(`Error enviando correo a ${email}: ${error.message}`);
      throw new Error('No se pudo enviar el correo de verificación');
    }
  }

  private renderText(code: string): string {
    return [
      `Tu código de verificación es: ${code}`,
      `Este código caduca en ${this.ttlMinutes} minutos.`,
      `Si no solicitaste este código, ignora este correo.`,
    ].join('\n');
  }

  private renderHtml(code: string): string {
    return `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; line-height:1.5; color:#111">
        <h2 style="margin:0 0 12px">${this.appName}</h2>
        <p>Usa el siguiente código para continuar:</p>
        <div style="font-size:24px; font-weight:700; letter-spacing:4px; padding:12px 16px; background:#f7f7f7; border:1px solid #eee; display:inline-block; border-radius:8px;">
          ${code}
        </div>
        <p style="margin-top:12px">Este código caduca en ${this.ttlMinutes} minutos.</p>
        <p style="color:#666; font-size:12px">Si no solicitaste este código, puedes ignorar este mensaje.</p>
      </div>
    `;
  }

  private ensureValidEmail(email: string): void {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      throw new Error('Correo electrónico inválido');
    }
  }
}
