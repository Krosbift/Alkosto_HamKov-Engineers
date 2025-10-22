import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class GenerateOtpCodeDto {
  @ApiProperty({
    description: 'Correo electrónico del usuario',
    example: 'usuario@correo.com',
    required: true,
  })
  @IsNotEmpty({ message: 'El correo electrónico es requerido' })
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  email: string;
}