import Vue from 'vue'
import Router from 'vue-router'

import ChoosePage from '../views/choosePage/ChoosePage.vue'
import EditPage from '../views/editPage/Index.vue'
// import IntroducePage from '../views/introducePage/IntroducePage.vue'
import UserCenterPage from '../views/userCenterPage/UserCenterPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: EditPage
    }, {  
      path: '/edit',
      name: 'edit',
      component: EditPage
    }, {
      path: '/choose',
      name: 'choose',
      component: ChoosePage
    }, {
      path: '/usercenter',
      name: 'usercenter',
      component: UserCenterPage
    }
  ]
})
