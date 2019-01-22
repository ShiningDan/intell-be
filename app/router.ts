import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  // home
  // 判断系统是否存活的接口
  router.get('/alive', controller.home.alive)
  // 增加首页产品
  router.post('/home/products', controller.home.addProduct)
  // 首页搜索框
  router.get('/home/search', controller.home.search)
  // 首页用户申请框
  router.post('/home/application', controller.home.apply)
  //首页计算器
  router.post('/home/calculator', controller.home.calculate)
  // 判断是否是管理员
  router.get('/home/isAdmin', controller.home.isAdmin)
  // router.delete('/home/User', controller.home.deleteUser)
  // router.put('/home/modify', controller.home.modify)

  // loan
  // 贷款页面搜索框
  router.get('/loan/search', controller.loan.search)
  // 贷款页面用户申请框
  router.post('/loan/application', controller.loan.apply)
  // 贷款页面计算器
  router.post('/loan/calculator', controller.loan.calculate)

}
