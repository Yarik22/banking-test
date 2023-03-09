import { Bank } from "src/banks/entities/bank.entity";
import { Category } from "src/categories/entities/category.entity";
import { BaseEntity } from "src/utils/BaseEntity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany } from "typeorm";

interface ITransaction{
    amount:number
    type: "profitable" | "consumable"
}

@Entity()
export class Transaction extends BaseEntity implements ITransaction {
    @Column()
    amount:number
    @Column({
        type: "enum",
        enum: ["profitable", "consumable"],
        default: "profitable",
      })
      type: "profitable" | "consumable";
    
    @CreateDateColumn()
    createdAt:Date

    @ManyToOne(type=>Bank,bank=>bank.transactions)
    bank:Bank

    @ManyToMany(type=>Category,category=>category.transactions,{ onDelete: 'CASCADE' })
    categories:Category[]
}
