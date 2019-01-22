import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export default class LoanUsers {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  phone: string

  @Column()
  job: string

  @Column()
  monthlyIncome: number

  @Column()
  houseType: string

  @Column()
  housePrice: number

  @Column()
  carPrice: number

  @Column()
  amount: number

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
