import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GenerateOtpCodeDto } from './dto/generate-opt-code.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { LoginPasswordDto } from './dto/login-password.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('generate-opt-code')
  generateOptCode(@Body() body: GenerateOtpCodeDto) {
    return this.service.generateOptCode(
      body.method,
      body.email,
      body.phoneNumber,
    );
  }

  @Post('change-password')
  changePassword(@Body() body: ChangePasswordDto) {}

  @Post('login-password')
  loginPassword(@Body() body: LoginPasswordDto) {}
}
