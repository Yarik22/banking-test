import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { Allow, IsString } from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @Transform(({value}) =>  value.toLowerCase())
    @IsString()
    name:string
}
