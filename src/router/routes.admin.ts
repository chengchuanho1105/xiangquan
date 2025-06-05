import type { RouteRecordRaw } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'

import companyProfile from '@/config/companyProfiles/xiangchaunProfile'

const adminRoutes: RouteRecordRaw = {
  path: '/',
  meta: { layout: 'admin' },
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/admin/DashboardView.vue'),
      meta: {
        layout: 'admin',
        role: 'admin',
        title: `儀表板|${companyProfile.basic.shortName}`,
        nav: {
          label: '儀表板',
          showInNavbar: true,
          order: 1,
        },
      },
    },
    // 可新增更多前台頁面...
  ],
}

export default adminRoutes
