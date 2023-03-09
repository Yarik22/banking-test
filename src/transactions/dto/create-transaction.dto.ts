import { Transform } from "class-transformer"
import { Allow, ArrayMinSize, IsArray, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"

enum Type {
    profitable = "profitable",
    consumable = "consumable"
  }

export class CreateTransactionDto {
    @IsNumber()
    readonly amount:number
    @IsEnum(Type, { message: 'Invalid type' })
    readonly type: "profitable" | "consumable"
    @Transform(({value}) =>  value.toLowerCase())
    @IsString()
    readonly bankName: string
    @Transform(({value}) =>  value.map((str:string) => str.toLowerCase()))
    @IsArray()
    @ArrayMinSize(1)
    @IsString({
        each:true
    })
    readonly categories: string[]
}
