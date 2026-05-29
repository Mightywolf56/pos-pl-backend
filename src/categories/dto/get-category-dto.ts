import { IsNumberString, IsOptional } from 'class-validator';

export class GetCategoryQueryDto {
  @IsOptional()
  @IsNumberString({}, { message: 'take debe ser un número' })
  take?: string;

  @IsOptional()
  @IsNumberString({}, { message: 'skip debe ser un número' })
  skip?: string;
}
