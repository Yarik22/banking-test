import { Transform } from "class-transformer";
import { IsOptional, IsNumber, Min, Max, IsInt } from "class-validator";

export class PaginationDto {
    @Transform(({value})=>Number(value))
    @IsInt()
    @IsOptional()
    @Min(1)
    readonly page: number = 1;
    @Transform(({value})=>Number(value))
    @IsInt()
    @IsOptional()
    @Min(1)
    @Max(100)
    readonly limit: number = 5;


}
