import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GenerateOtpCodeDto } from './dto/generate-opt-code.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('generate-opt-code')
  generateOptCode(@Body() body: GenerateOtpCodeDto) {
    return this.service.generateOptCode(body);
  }
}
