import { Transform } from "class-transformer";
import { Allow, ArrayNotEmpty, IsArray, IsDate, IsOptional } from "class-validator";

export class TransactionAmountStatisticDto {
    @IsArray()
    @ArrayNotEmpty()
    readonly categoryIds:number[]
    @IsOptional()
    @Transform(({value})=>new Date(value))
    @IsDate()
    readonly fromPeriod:Date = new Date("1970-01-01")
    @IsOptional()
    @Transform(({value})=>new Date(value))
    @IsDate()
    readonly toPeriod:Date = new Date()
}
