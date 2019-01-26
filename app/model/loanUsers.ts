import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export default class LoanUsers {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string= ''

  @Column()
  phone: string

  @Column()
  job: string= ''

  @Column()
  monthlyIncome: number= -1

  @Column()
  houseType: string= ''

  @Column()
  housePrice: number= -1

  @Column()
  carPrice: number= -1

  @Column()
  amount: number= -1

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
