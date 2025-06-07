import type { RouteRecordRaw } from 'vue-router'

import companyProfile from '@/config/companyProfiles/xiangchaunProfile'

const publicRoutes: RouteRecordRaw = {
  path: '/',
  meta: { layout: 'public' },
  children: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/public/LoginView.vue'),
      meta: {
        layout: 'public',
        role: 'public',
        title: `登入｜${companyProfile.basic.shortName}`,
        nav: {
          label: '登入',
          showInNavbar: false,
          order: 0,
        },
      },
    },
    // 可新增更多前台頁面...
  ],
}

export default publicRoutes
