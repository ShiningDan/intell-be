import { Service, Context } from 'egg'
import { LoanProductsModel, LoanUsersModel  } from '../model'

export default class Loan extends Service {
  constructor(ctx: Context) {
    super(ctx)
  }

// 这里实现搜素框查询功能
    public async search({ name }: { name: string }): Promise<LoanProductsModel[]> {
    const { app } = this
    const loanProductRepository  = app.typeorm.getRepository(LoanProductsModel)
    const product = await loanProductRepository.find({
      name
    })
    if (product.length) {
      return product
    }else {
      throw Error
    }
  }

// 这里实现贷款页面的贷款计算器
public async calculate({ name= ' ', amount = 0 , job, monthlyIncome, houseType, housePrice, carPrice, phone }:
{  name: string, amount: number,  job: string, monthlyIncome: number, houseType: string, housePrice: number, carPrice: number, phone: string }): Promise<LoanUsersModel> {
  const { app } = this
  const loanUserRepository  = app.typeorm.getRepository(LoanUsersModel)
  const user = new LoanUsersModel()
  user.job = job
  user.monthlyIncome = monthlyIncome
  user.houseType = houseType
  user.housePrice = housePrice
  user.carPrice = carPrice
  user.phone = phone
  user.name = name
  user.amount = amount
  if (user.phone) {
    const result = await loanUserRepository.save(user)
    return result
  }else {
    throw Error
  }
}

// 这里实现用户对想了解业务的申请功能
public async apply({  housePrice = 0, name, phone, amount , job = ' ', monthlyIncome= 0, houseType = ' ', carPrice = 0 }:
  {  housePrice: number,  name: string, phone: string, amount: number, job: string,  monthlyIncome: number, houseType: string, carPrice: number}): Promise<LoanUsersModel> {
  const { app } = this
  const loanUserRepository  = app.typeorm.getRepository(LoanUsersModel)
  const user = new LoanUsersModel()
  user.name = name
  user.phone = phone
  user.amount = amount
  user.housePrice = housePrice
  user.monthlyIncome = monthlyIncome
  user.houseType = houseType
  user.job = job
  user.carPrice = carPrice
  const result = await loanUserRepository.save(user)
  return result
  }
}
