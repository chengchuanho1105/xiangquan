import type { RouteRecordRaw } from 'vue-router'

import companyProfile from '@/config/companyProfiles/crazyclownProfile'

const crazyclownRoutes: RouteRecordRaw = {
  path: '/',
  meta: { layout: 'crazyclown' },
  children: [
    {
      path: '/crazyclown',
      name: 'crazyclown',
      component: () => import('@/views/crazyclown/HomeView.vue'),
      meta: {
        layout: 'crazyclown',
        role: 'crazyclown',
        title: `首頁｜${companyProfile.basic.shortName}`,
        nav: {
          label: '首頁',
          showInNavbar: true,
          order: 1,
        },
      },
    },
    // 可新增更多前台頁面...
  ],
}

export default crazyclownRoutes
