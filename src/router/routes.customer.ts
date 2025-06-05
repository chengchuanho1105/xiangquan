import type { RouteRecordRaw } from 'vue-router'
import CustomerLayout from '@/layouts/CustomerLayout.vue'

import companyProfile from '@/config/companyProfiles/xiangchaunProfile'

const customerRoutes: RouteRecordRaw = {
  path: '/',
  meta: { layout: 'customer' },
  children: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/customer/HomeView.vue'),
      meta: {
        layout: 'customer',
        role: 'customer',
        title: `首頁|${companyProfile.basic.shortName}`,
        nav: {
          label: '首頁',
          showInNavbar: true,
          order: 1,
        },
      },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/views/customer/AboutView.vue'),
      meta: {
        layout: 'customer',
        role: 'customer',
        title: `關於我們|${companyProfile.basic.shortName}`,
        nav: {
          label: '關於我們',
          showInNavbar: true,
          order: 2,
        },
      },
    },
    // 可新增更多前台頁面...
  ],
}

export default customerRoutes
