import { Controller, Context } from 'egg'

export default class HomeController extends Controller {
  constructor(ctx: Context) {
    super(ctx)
    this.getRequestPayload = ctx.helper.getRequestPayload
    this.stdout = ctx.helper.stdout
    this.stderr = ctx.helper.stderr
  }

  public async alive() {
    const { ctx } = this
    try {
      this.stdout(ctx, 'alive')
    } catch (err) {
      this.stderr(ctx, err)
    }
  }

  public async greet() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        name: 'string'
      }, payload)
      const data = await this.service.home.greet(payload)
      this.stdout(ctx, data)
    } catch (err) {
      this.stderr(ctx, err)
    }
  }

  public async isAdmin() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        name: 'string'
      }, payload)
      const data = await this.service.home.isAdmin(payload)
      this.stdout(ctx, data)
    } catch (err) {
      this.stderr(ctx, err)
    }
  }

   /*
  保险
  */

  public async getFeeOfMonth() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        age: 'string',
        sex: 'string',
        name: 'string',
        insurType: 'string',
        basicAmount: 'string',
        phone: 'string'
      }, payload)
      // ?age=10&sex=女&name=小红&insurType=健康险&basicAmount=10000&phone=12345678901
      const data = await this.service.home.getFeeOfMonth(payload)
      this.stdout(ctx, data)
    } catch (err) {
      this.stderr(ctx, err)
    }
  }

  // 获取首页推荐保险
  public async getRecommendIns() {
    const { ctx } = this
    try {
      const data = await this.service.home.getRecommendIns()
      this.stdout(ctx, data)
    } catch (err) {
      this.stderr(ctx, err)
    }
  }

  // 首页根据id返回保险详情
  public async getInsContent() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        id: 'string'
      }, payload)
      const data = await this.service.home.getInsContent(payload)
      this.stdout(ctx, data)
    } catch (err) {
      this.stderr(ctx, err)
    }
  }

  // 获取申请的用户（页面下方，只填写了手机号）
  public async addApplyUser() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        phone: 'string'
      }, payload)
      const data = await this.service.home.addApplyUser(payload)
      this.stdout(ctx, data)
    } catch (err) {
      this.stderr(ctx, err)
    }
  }

}
