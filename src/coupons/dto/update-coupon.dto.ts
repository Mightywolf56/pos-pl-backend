import { PartialType } from '@nestjs/mapped-types';
import { CreateCouponDto } from './create-coupon.dto';
import { IsDateString, IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class UpdateCouponDto extends PartialType(CreateCouponDto) {
  @IsNotEmpty({ message: 'El nombre no puede ir vácio' })
  name: string;

  @IsNotEmpty({ message: 'El descuento no debe ir vacio' })
  @IsInt({ message: 'El descuento debe debe ser entre 1 y 100' })
  @Max(100, { message: 'El descuento máximo es de 100' })
  @Min(1, { message: 'El Descuento mínimo es de 1' })
  percentage: number;

  @IsNotEmpty({ message: 'La Fecha no puede ir vacia' })
  @IsDateString({}, { message: 'El formato de Fecha no es válido' })
  expirationDate: Date;
}
