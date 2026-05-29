import { IsNotEmpty, IsNumber, IsString, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'El nombre del Producto es Obligatorio' })
  @IsString({ message: 'Nombre No Válido' })
  name: string;

  @IsNotEmpty({ message: 'La Imagen del Producto es Obligatoria' })
  image: string;

  @IsNotEmpty({ message: 'El Precio del Producto es Obligatorio' })
  @IsNumber({ maxDecimalPlaces: 2 }, { message: 'Precio No Válido' })
  price: number;

  @IsNotEmpty({ message: 'La cantidad no puede ir vacia' })
  @IsNumber({ maxDecimalPlaces: 0 }, { message: 'Cantidad No Válida' })
  inventory: number;

  @IsNotEmpty({ message: 'La categoría es Obligatoria' })
  @IsUUID()
  categoryId: string;
}
