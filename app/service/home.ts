import { Service, Context } from 'egg'
import { HomeProductModel , HomeUserModel} from '../model'

export default class Home extends Service {
  constructor(ctx: Context) {
  super(ctx)
  }

// 这里实现搜素框查询功能
public async search({ type }: { type: string }): Promise<HomeProductModel[]> {
  const { app } = this
  const homeProductRepository  = app.typeorm.getRepository(HomeProductModel)
  const product = await homeProductRepository.find({type})
  if (product.length) {
    return product
  }else {
    throw new Error('Sorry,  没有搜索到相关产品')
  }
}

// 这里实现首页用户对想了解业务的申请功能
public async apply({ type , name, phone}:
{ type: string, name: string, phone: string }): Promise<HomeUserModel> {
  const { app } = this
  const homeUserRepository  = app.typeorm.getRepository(HomeUserModel)
  const user = new HomeUserModel()
  user.type = type
  user.name = name
  user.phone = phone
  const result = await homeUserRepository.save(user)
  return result
}

// 这里实现首页贷款计算器
public async calculate({ job, monthlyIncome, houseType, carPrice, phone }:
 { job: string, monthlyIncome: number, houseType: string, carPrice: number, phone: string}): Promise<HomeUserModel> {
  const { app } = this
  const homeUserRepository  = app.typeorm.getRepository(HomeUserModel)
  const user = new HomeUserModel()
  user.job = job
  user.monthlyIncome = monthlyIncome
  user.houseType = houseType
  user.carPrice = carPrice
  user.phone = phone
  if (user.phone.length !== 0 ) {
    const result = await homeUserRepository.save(user)
    return result
  }else {
    throw new Error('Sorry, 用户未输入手机号')
  }
}

// 这里实现首页底部用户免费通话手机号存储
public async call({ phone}: { phone: string }): Promise<HomeUserModel> {
    const { app } = this
    const homeUserRepository  = app.typeorm.getRepository(HomeUserModel)
    const user = new HomeUserModel()
    user.phone = phone
    if (user.phone.length) {
      const result = await homeUserRepository.save(user)
      return result
    }else {
      throw new Error('Sorry,  号码有误')
    }
  }

public async isAdmin({ name }: { name: string}): Promise<boolean> {
  const { app } = this
  if (app.config.admin.includes(name)) {
    return true
  }
  return false
}
}
