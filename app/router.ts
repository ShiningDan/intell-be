import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  // 判断系统是否存活的接口
  router.get('/alive', controller.home.alive)

  // home
  router.get('/home/greet', controller.home.greet)
  router.get('/home/isAdmin', controller.home.isAdmin)

  // 保险
  router.post('/ins/getFeeOfMonth', controller.ins.getFeeOfMonth)

  // 获取首页推荐保险
  router.get('/ins', controller.ins.getRecommendIns)

  // 首页根据id获取保险详情
  router.get('/ins/content', controller.ins.getInsContent)

  // 添加申请用户（只填写手机号的那些）
  router.post('/ins/addApplyUser', controller.ins.addApplyUser)

}
