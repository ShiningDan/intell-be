import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export default class HomeUser {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  phone: string

  @Column()
  job: string

  @Column()
  type: string

  @Column()
  monthlyIncome: number

  @Column()
  houseType: string

  @Column()
  carPrice: number

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
