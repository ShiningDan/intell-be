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

  // 首页广告旁用户想了解的业务
  @Column()
  type: string

  @Column()
  monthlyIncome: number

  // 首页房产类型
  @Column()
  houseType: string

  // 汽车购置价格
  @Column()
  carPrice: number

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
