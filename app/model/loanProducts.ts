import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export default class LoanProducts {
  @PrimaryGeneratedColumn()
  id: number

  // 1贷款  2 信用卡   3保险
  @Column()
  productType: number= 1

  @Column()
  name: string

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
