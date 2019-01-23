import { Service, Context } from 'egg'
// import { GreetingModel } from '../model'
import { HomeProductModel , HomeUserModel,CreditCardProductsModel} from '../model'

export default class Home extends Service {
  constructor(ctx: Context) {
  super(ctx)
  }

  /*
// 这里实现产品增加功能
public async addProduct({name, productId = 1, type}: { name: string, productId: number, type: string}): Promise<HomeProductModel> {

  const { app } = this
  const greetingRepository  = app.typeorm.getRepository(HomeProductModel)
  const newProduct = new HomeProductModel()
  newProduct.productId = productId
  newProduct.name = name
  newProduct.type = type
  await greetingRepository.save(newProduct)
  return newProduct
}
*/

// 这里实现搜素框查询功能
public async search({ type }: { type: string }): Promise<HomeProductModel[]> {
  const { app } = this
  const homeProductRepository  = app.typeorm.getRepository(HomeProductModel)
  const product = await homeProductRepository.find({
  type
  })
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
  user.job = ''
  user.monthlyIncome = 0
  user.houseType = ''
  user.carPrice = 0
  const result = await homeUserRepository.save(user)
  return result
}

// 这里实现首页贷款计算器
public async calculate({ job, monthlyIncome, houseType, carPrice, phone }:
 { job: string, monthlyIncome: number, houseType: string, carPrice: number, phone: string}): Promise<HomeUserModel> {
  const { app } = this
  const homeUserRepository  = app.typeorm.getRepository(HomeUserModel)
  const user = new HomeUserModel()
  user.type = ''
  user.name = ''
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

// 这里实现首页快速匹配适合您的信用卡
public async match(name = 'creditCard'): Promise<CreditCardProductsModel[]> {
  const { app } = this
  const CreditCardProductsRepository  = app.typeorm.getRepository(CreditCardProductsModel)
  const product = await CreditCardProductsRepository.find({name})
  if (product.length) {
    return product
  }else {
    throw new Error('Sorry,  没有搜到和您匹配的相关产品')
  }
}

// 这里实现首页底部用户免费通话手机号存储
public async call({ phone}: { phone: string }): Promise<HomeUserModel> {
    const { app } = this
    const homeUserRepository  = app.typeorm.getRepository(HomeUserModel)
    const user = new HomeUserModel()
    user.phone = phone
    user.type = 'unknown'
    user.name = 'unknown'
    user.job = 'unknown'
    user.houseType = 'unknown'
    user.monthlyIncome = -1
    user.carPrice = -1
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
/*
  // 这里实现删除功能
  // public async deleteUser(id: number) : Promise<string> {
public async deleteUser(name: string): Promise<string> {
  const { app } = this
  const greetingRepository  = app.typeorm.getRepository(GreetingModel)
  const deUser = new GreetingModel()
  deUser.name = name
  if ( greetingRepository.hasId(deUser)) {
      await greetingRepository.remove(deUser)
      console.log(deUser)
      return ` ${deUser.id} 删除成功~ `
  }else {
    return ` ${deUser.name} 不存在~ `}
}

  // 这里实现修改功能
  // public async modify( {id, greet}: {id: number, greet: string}): Promise<string> {
public async modify( {name, greet}: {name: string, greet: string}): Promise<string> {
  const { app } = this
  const greetingRepository  = app.typeorm.getRepository(GreetingModel)
  const findUser = await greetingRepository.findOne({
    name
  })
  if (findUser) {
    findUser.greeting = greet
    const result = await greetingRepository.save(findUser)
    return ` ${result.greeting} ${result.name} 您的greeting更新了哟~ `
  }else {
    return `Sorry,用户不存在~ `
  }
}
*/
}
