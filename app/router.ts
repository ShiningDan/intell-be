import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  // 判断系统是否存活的接口
  router.get('/alive', controller.home.alive)

  // home
  router.post('/home/addProduct', controller.home.addProduct)
  router.get('/home/search', controller.home.search)
  router.post('/home/application', controller.home.application)
  router.post('/home/calculator', controller.home.calculator)
  router.get('/home/isAdmin', controller.home.isAdmin)
  // router.delete('/home/deleteUser', controller.home.deleteUser)
  // router.put('/home/modify', controller.home.modify)

  // loan
  router.get('/loan/search', controller.loan.search)
  router.post('/loan/application', controller.loan.application)
  router.post('/loan/calculator', controller.loan.calculator)

}
