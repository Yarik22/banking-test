import { Transform } from "class-transformer";
import { Allow } from "class-validator";


export class CreateCategoryDto {
    @Transform(({value}) =>  value.toLowerCase())
    @Allow()
    name:string
}
