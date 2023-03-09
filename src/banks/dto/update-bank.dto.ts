import { PartialType } from '@nestjs/mapped-types';
import { Allow } from 'class-validator';
import { CreateBankDto } from './create-bank.dto';

export class UpdateBankDto extends PartialType(CreateBankDto) {
    @Allow()
    name:string
}
