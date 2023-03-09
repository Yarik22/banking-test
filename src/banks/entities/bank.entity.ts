import { Transaction } from "src/transactions/entities/transaction.entity";
import { BaseEntity } from "src/utils/BaseEntity";
import { Entity, Column, OneToMany } from "typeorm"

interface IBank{
    balance:number
    name:string
}

@Entity()
export class Bank extends BaseEntity implements IBank {
    
    @Column(
        {
            default: 0
        }
    )
    balance:number

    @Column()
    name:string

    @OneToMany(type=>Transaction,transaction=>transaction.bank)
    transactions:Transaction[]
}