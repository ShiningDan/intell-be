import { Service, Context } from 'egg'
import { GreetingModel, InsUserModel, InsInfoModel } from '../model'
import InsUser from '../model/insUser'
import InsInfo from '../model/insInfo'

export default class Home extends Service {
  constructor(ctx: Context) {
    super(ctx)
  }

  public async greet({ name }: { name: string }): Promise<string> {
    const { app } = this
    const greetingRepository  = app.typeorm.getRepository(GreetingModel)
    const user = await greetingRepository.findOne({
      name
    })
    if (!user) {
      return 'Hello Anonymous'
    }
    return `Hello ${user.greeting}`
  }

  public async isAdmin({ name }: { name: string}): Promise<boolean> {
    const { app } = this
    if (app.config.admin.includes(name)) {
      return true
    }
    return false
  }

  /*
  保险
  */

  /**
   * 保险试算：计算每月应缴纳的大概保费
   * @param age:年龄
   * @param sex:性别
   * @param name:姓名
   * @param insurType:险种
   * @param basicAmount:基础保额
   * @param phone:电话号
   * @returns 每月应交保费
   */
  public async getFeeOfMonth( {age, sex, name, insurType, basicAmount, phone}: {age: number, sex: string, name: string, insurType: string,
                              basicAmount: number, phone: string}): Promise<number> {
    const { app } = this
    const userRepository = app.typeorm.getRepository(InsUserModel)
    // 根据传入的参数创建User
    const user = new InsUser()
    user.age = age
    user.sex = sex
    user.name = name
    user.ins_type = insurType
    user.basic_amount = basicAmount
    user.phone = phone

    await userRepository.save(user) // 如果存在，更新；不存在，增加。
    // 目前没有计算方式先写死返回值
    return 500
  }

  /**
   * 获取首页推荐的保险
   * @returns 保险数组
   */
  public async getRecommendIns(): Promise<InsInfo[]> {
    const { app } = this
    const insRepository  = app.typeorm.getRepository(InsInfoModel)
    const ins = await insRepository.find({
    })
    return ins
  }

  /**
   * 首页根据id返回保险详情内容
   * @param id:要查询的保险id
   * @returns:对应的保险对象内容
   */
  public async getInsContent({ id }: {id: number}): Promise<InsInfo> {
    const { app } = this
    const insRepository = app.typeorm.getRepository(InsInfoModel)
    const ins = await insRepository.findOne({
      id
    })
    // 找不到对应的id的保险,返回空对象
    if (!ins) {
      return new InsInfo()
    }
    return ins
  }

  /**
   *
   * @param phone: 用户所填电话号
   * @returns :添加成功的对象
   */
  public async addApplyUser({ phone }: {phone: string}): Promise<InsUser> {
    const { app } = this
    const userRepository = app.typeorm.getRepository(InsUserModel)
    // 根据电话号创建匿名User
    const user = new InsUser()
    user.age = -1
    user.sex = 'unknown'
    user.name = 'unknown'
    user.ins_type = 'unknown'
    user.basic_amount = -1
    user.phone = phone
    // 只有在这里生成的用户applied才是true
    user.applied = true

    const status = await userRepository.save(user) // 如果存在，更新；不存在，增加。
    return status
  }

}
