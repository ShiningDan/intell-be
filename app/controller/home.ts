import { Controller, Context } from 'egg'

export default class HomeController extends Controller {
  constructor(ctx: Context) {
    super(ctx)
    this.getRequestPayload = ctx.helper.getRequestPayload
    this.stdout = ctx.helper.stdout
    this.stderr = ctx.helper.stderr
  }
/*
  public async addProduct() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        productId: 'int',
        name: 'string',
        type: ['loan', 'insurance', 'creditCard']
      }, payload)
      const data = await this.service.home.addProduct(payload)
      this.stdout(ctx, data)
    } catch (err) {
      this.stderr(ctx, err)
    }
  }
*/
  public async search() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        type: 'string'
      }, payload)
      const data = await this.service.home.search(payload)
      this.stdout(ctx, data)
    } catch (err) {
     this.stderr(ctx, err)
    }
  }

  public async apply() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        type: 'string',
        name: 'string',
        phone: 'string',
      }, payload)
      const data = await this.service.home.apply(payload)
      this.stdout(ctx, data)
    } catch (err) {
     this.stderr(ctx, err)
    }
  }

  public async calculate() {
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
      const data = await this.service.home.calculate(payload)
      this.stdout(ctx, data)
    } catch (err) {
     this.stderr(ctx, err)
    }
  }

  public async match() {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({}
      , payload)
      const data = await this.service.home.match(payload)
      this.stdout(ctx, data)
    } catch (err) {
     this.stderr(ctx, err)
    }
  }

  public async call () {
    const { ctx } = this
    try {
      const payload = this.getRequestPayload(ctx)
      ctx.validate({
        phone: 'string'
      }
      , payload)
      const data = await this.service.home.call(payload)
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

  public async alive() {
    const { ctx } = this
    try {
      this.stdout(ctx, 'alive')
    } catch (err) {
      this.stderr(ctx, err)
    }
  }

}
