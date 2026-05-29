import { IsNumberString, IsOptional } from 'class-validator';

export class GetProductQueryDto {
  @IsOptional()
  @IsNumberString({}, { message: 'La Categoria debe ser un número' })
  category_id?: string;

  @IsOptional()
  @IsNumberString({}, { message: 'La cantida debe ser un número' })
  take: number;

  @IsOptional()
  @IsNumberString({}, { message: 'La cantida debe ser un número' })
  skip: number;
}
