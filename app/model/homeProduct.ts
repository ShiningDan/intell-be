import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm'

@Entity()
export default class HomeProduct {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  productId: number

  @Column()
  type: string

  @Column()
  name: string

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date
}
