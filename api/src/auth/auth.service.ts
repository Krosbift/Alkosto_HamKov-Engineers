import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  generateOptCode(method: string, email?: string, phoneNumber?: string) {}
}
