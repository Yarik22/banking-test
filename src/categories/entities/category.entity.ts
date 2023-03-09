import { Transaction } from "src/transactions/entities/transaction.entity";
import { BaseEntity } from "src/utils/BaseEntity";
import { Entity, Column, OneToMany, ManyToMany, JoinTable } from "typeorm"

interface ICategory{
    name:string
}

@Entity()
export class Category extends BaseEntity implements ICategory {
    @Column()
    name:string

    @ManyToMany(type=>Transaction,transaction=>transaction.categories,{onDelete:"RESTRICT"})
    @JoinTable(
        {
            name: 'category_transaction',
            joinColumn: {
              name: 'categoryId',
              referencedColumnName: 'id'
            },
            inverseJoinColumn: {
              name: 'transactionId',
              referencedColumnName: 'id'
            }
          }
    )
    transactions:Transaction[]
}
