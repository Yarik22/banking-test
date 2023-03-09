import { Allow } from "class-validator";


export class CreateCategoryDto {
    @Allow()
    name:string
}
