import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export default class HomeProduct {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  productId: number

  // 贷款  信用卡  保险
  @Column()
  type: string = ''

  @Column()
  name: string= ''

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
