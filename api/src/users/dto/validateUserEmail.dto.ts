import { IsEmail, IsNotEmpty } from 'class-validator';

export class ValidateUserEmailDto {
  @IsNotEmpty({ message: 'El correo electrónico es requerido' })
  @IsEmail({}, { message: 'El correo electrónico no es válido' })
  email: string;
}