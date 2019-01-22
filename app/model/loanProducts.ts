import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export default class LoanProducts {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  productId: string

  @Column()
  name: string

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
