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
  const product = await loanProductRepository.find({name})
  if (product.length) {
    return product
  }else {
    throw new Error('Sorry, 没有搜索到相关产品')
  }
}

  // 这里实现贷款页面的贷款计算器
  public async calculate({  job, monthlyIncome, houseType, housePrice, carPrice, phone }:
  { job: string, monthlyIncome: number, houseType: string, housePrice: number, carPrice: number, phone: string }): Promise<LoanUsersModel> {
    const { app } = this
    const loanUserRepository  = app.typeorm.getRepository(LoanUsersModel)
    const user = new LoanUsersModel()
    user.job = job
    user.monthlyIncome = monthlyIncome
    user.houseType = houseType
    user.housePrice = housePrice
    user.carPrice = carPrice
    user.phone = phone
    if (user.phone.length !== 0) {
      const result = await loanUserRepository.save(user)
      return result
    }else {
      throw new Error('Sorry, 用户未输入手机号')
    }
  }

  // 这里实现用户对想了解业务的申请功能
  public async apply({  name, phone, amount}:
    { name: string, phone: string, amount: number}): Promise<LoanUsersModel> {
    const { app } = this
    const loanUserRepository  = app.typeorm.getRepository(LoanUsersModel)
    const user = new LoanUsersModel()
    user.name = name
    user.phone = phone
    user.amount = amount
    const result = await loanUserRepository.save(user)
    return result
  }

  // 这里实现首页底部用户免费通话手机号存储
  public async call({ phone}: { phone: string}): Promise<LoanUsersModel> {
    const { app } = this
    const loanUserRepository  = app.typeorm.getRepository(LoanUsersModel)
    const user = new LoanUsersModel()
    user.phone = phone
    if (user.phone.length) {
      const result = await loanUserRepository.save(user)
      return result
    }else {
      throw new Error('Sorry,  号码有误')
    }
  }
}
