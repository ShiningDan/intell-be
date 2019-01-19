import { Controller, Context } from 'egg'

export default class HomeController extends Controller {
  constructor(ctx: Context) {
    super(ctx)
    this.getRequestPayload = ctx.helper.getRequestPayload
    this.stdout = ctx.helper.stdout
    this.stderr = ctx.helper.stderr
  }

  public async addProduct() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        productId: 'int',
        name: 'string',
        type: ['贷款', '保险', '信用卡']
      }, payload)
      const data = await this.service.home.addProduct(payload)
      this.stdout(ctx, data)
    } catch (err) {
      this.stderr(ctx, err)
    }
  }

  public async search() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        type: 'string'
      }, payload)
      const data = await this.service.home.search(payload)
      this.stdout(ctx, data)
      console.log(this.ctx.name)
    } catch (err) {
     this.stderr(ctx, err)
    }
  }

  public async application() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        type: 'string',
        name: 'string',
        phone: 'string',
      }, payload)
      const data = await this.service.home.application(payload)
      this.stdout(ctx, data)
      console.log(this.ctx.name)
    } catch (err) {
     this.stderr(ctx, err)
    }
  }

  public async calculator() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        job: 'string',
        monthlyIncome: 'int',
        houseType: 'string',
        phone: 'string',
        carPrice: 'int',
      }, payload)
      const data = await this.service.home.calculator(payload)
      this.stdout(ctx, data)
      console.log(this.ctx.name)
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

  public async alive() {
    const { ctx } = this
    try {
      this.stdout(ctx, 'alive')
    } catch (err) {
      this.stderr(ctx, err)
    }
  }

}
