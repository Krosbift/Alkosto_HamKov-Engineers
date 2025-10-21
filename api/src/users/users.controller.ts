import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ValidateUserEmailDto } from './dto/validateUserEmail.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get('validate-user-email')
  public async validateUserEmail(
    @Query() query: ValidateUserEmailDto
  ) {
    return this.service.validateUserEmail(query.email);
  }
}
