import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsPositive,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

import { CategoryDto } from '../../';

export class ProductDto {
  // id_product: number;
  @IsNotEmpty()
  @IsString()
  name_product: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  unit_price: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  quantity_available: number;

  @IsNotEmpty()
  @IsBoolean()
  until_box: boolean;
  


  // id_category: number;
  @Type(() => CategoryDto)
  @ValidateNested()
  @IsObject()
  @IsOptional()
  category: CategoryDto;
}

export class UpdateProductDto extends PartialType(ProductDto) {
  
}
