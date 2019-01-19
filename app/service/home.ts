import { Service, Context } from 'egg'
// import { GreetingModel } from '../model'
import { HomeProductModel } from '../model'
import { HomeUserModel } from '../model'

export default class Home extends Service {
  constructor(ctx: Context) {
    super(ctx)
  }

// 这里实现产品增加功能
public async addProduct({name, productId = 1, type}: { name: string, productId: number, type: string}): Promise<HomeProductModel> {

  const { app } = this
  const greetingRepository  = app.typeorm.getRepository(HomeProductModel)
  const newProduct = new HomeProductModel()
  newProduct.productId = productId
  newProduct.name = name
  newProduct.type = type
  const result = await greetingRepository.save(newProduct)
  console.log(result)
  return newProduct
}

// 这里实现搜素框查询功能
    public async search({ type }: { type: string }): Promise<any> {
    const { app } = this
    const homeProductRepository  = app.typeorm.getRepository(HomeProductModel)
    const product = await homeProductRepository.find({
      type
    })
    console.log(product)
    if (product.length) {
      return product
    }
    return '搜索到0条相关信息'
  }

// 这里实现首页用户对想了解业务的申请功能
public async application({ type , name, phone, job = ' ', monthlyIncome = 0, houseType= ' ', carPrice = 0}:
{ type: string, name: string, phone: string , job: string, monthlyIncome: number, houseType: string, carPrice: number}): Promise<HomeUserModel> {
  const { app } = this
  const homeUserRepository  = app.typeorm.getRepository(HomeUserModel)
  const user = new HomeUserModel()
  user.type = type
  user.name = name
  user.phone = phone
  user.job = job
  user.monthlyIncome = monthlyIncome
  user.houseType = houseType
  user.carPrice = carPrice
  const result = await homeUserRepository.save(user)
  return result
}

// 这里实现首页贷款计算器
public async calculator({ type = ' ' , name= ' ', job, monthlyIncome, houseType, carPrice, phone}: { type: string, name: string , job: string, monthlyIncome: number, houseType: string, carPrice: number, phone: string }): Promise<any> {
  const { app } = this
  const homeUserRepository  = app.typeorm.getRepository(HomeUserModel)
  const user = new HomeUserModel()
  user.type = type
  user.name = name
  user.job = job
  user.monthlyIncome = monthlyIncome
  user.houseType = houseType
  user.carPrice = carPrice
  user.phone = phone
  if (user.phone) {
    const result = await homeUserRepository.save(user)
    return result
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
