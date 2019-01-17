import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app

  // 判断系统是否存活的接口
  router.get('/alive', controller.home.alive)

  // home
  router.get('/home/greet', controller.home.greet)
  router.get('/home/isAdmin', controller.home.isAdmin)

  // 保险 疑问：为何这里用router.post就404
  router.get('/home/ins/getFeeOfMonth', controller.home.getFeeOfMonth)

  // 获取首页推荐保险
  router.get('/home/ins', controller.home.getRecommendIns)

  // 首页根据id获取保险详情
  router.get('/home/ins/content', controller.home.getInsContent)

  // 添加申请用户（只填写手机号的那些）
  router.get('/home/ins/addApplyUser', controller.home.addApplyUser)

}
