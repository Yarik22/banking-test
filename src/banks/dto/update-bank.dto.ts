import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { Allow } from 'class-validator';
import { CreateBankDto } from './create-bank.dto';

export class UpdateBankDto extends PartialType(CreateBankDto) {
    @Transform(({value}) =>  value.toLowerCase())
    @Allow()
    name:string
}
