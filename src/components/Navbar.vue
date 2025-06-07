<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineOptions } from 'vue'
import { useRouter } from 'vue-router'

import type { CompanyProfile } from '@/types/companyProfile'

defineOptions({ name: 'AppNavbar' })

const { companyProfile, currentRole } = defineProps<{
  companyProfile: CompanyProfile
  currentRole: string
}>()

const router = useRouter()

// ----------- 導覽列資料根據 router 自動生成（含子選單） ----------
const navItems = computed(() => {
  const parentRoutes = router.getRoutes().filter(route =>
    route.meta?.nav?.showInNavbar &&
    route.meta?.role === currentRole &&
    route.children && route.children.length > 0
  )

  const singleRoutes = router.getRoutes().filter(route =>
    route.meta?.nav?.showInNavbar &&
    route.meta?.role === currentRole &&
    (!route.children || route.children.length === 0)
  )

  return [
    ...singleRoutes.map(r => ({
      name: r.meta?.nav?.label ?? '未命名單一頁面', // 使用 nullish coalescing
      path: r.path,
      children: []
    })),
    ...parentRoutes.map(r => ({
      name: r.meta?.nav?.label ?? '未命名主頁面', // 使用 nullish coalescing
      path: r.path,
      children: r.children
        .filter(child => child.meta?.nav?.showInNavbar)
        .map(child => ({
          name: child.meta?.nav?.label ?? '未命名子頁面', // 使用 nullish coalescing
          path: r.path.replace(/\/$/, '') + '/' + child.path.replace(/^\//, ''),
        }))
    }))
  ]
})

// ----------- navbar 滾動行為控制 -----------

const isScrolled = ref(false)
const lastScrollTop = ref(0)
const isNavbarVisible = ref(true)

const onScroll = () => {
  const currentScrollTop = window.scrollY
  isScrolled.value = currentScrollTop > 5

  if (currentScrollTop > lastScrollTop.value && currentScrollTop > 50) {
    isNavbarVisible.value = false
  } else {
    isNavbarVisible.value = true
  }

  lastScrollTop.value = currentScrollTop
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

// ----------- 手機版選單行為 -----------

const NavigationBarMenuOpen = ref(false)
const activeSubMenu = ref<string | null>(null)

const toggleMenu = () => {
  NavigationBarMenuOpen.value = !NavigationBarMenuOpen.value
  if (!NavigationBarMenuOpen.value) activeSubMenu.value = null
}

const toggleSubMenu = (path: string) => {
  activeSubMenu.value = activeSubMenu.value === path ? null : path
}
</script>

<template>
  <div id="appNavbar" :class="{
    'fixed top-0 left-0 w-full z-50 transition-all duration-300 select-none': true,
    'bg-indigo-200/70 dark:bg-indigo-800/70 shadow backdrop-blur': isScrolled,
    'bg-indigo-200/30 dark:bg-indigo-800/30': !isScrolled,
    '-translate-y-full': !isNavbarVisible,
    'translate-y-0': isNavbarVisible,
  }">
    <nav class="flex items-center mx-auto justify-between py-2 px-5">
      <div class="flex items-center space-x-2">
        <img :src="companyProfile.branding.faviconUrl" alt="Logo" class="h-[40px] w-[40px]" />
        <RouterLink :to="companyProfile.website.homepageRouterLink">
          <span class="text-lg font-bold text-indigo-950 dark:text-indigo-50">
            {{ companyProfile.basic.shortName }}
          </span>
        </RouterLink>
      </div>

      <!-- 大螢幕選單 -->
      <ul class="hidden lg:flex items-center space-x-8">
        <li v-for="link in navItems" :key="link.path" class="relative group">
          <RouterLink :to="link.path" :class="[
            'inline-block transition duration-300 transform',
            $route.path === link.path || ($route.path.startsWith(link.path) && link.children.length)
              ? 'text-indigo-800 dark:text-indigo-200 border-b-2 border-indigo-700 dark:border-indigo-300'
              : 'text-gray-800 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-indigo-200 hover:scale-105'
          ]">
            {{ link.name }}
          </RouterLink>

          <!-- 子選單 -->
          <ul v-if="link.children.length"
            class="absolute top-full left-0 w-48 bg-gray-200 dark:bg-gray-800 shadow-xl rounded-xl invisible group-hover:visible z-50">
            <li v-for="child in link.children" :key="child.path"
              class="px-4 py-2 hover:bg-indigo-200 dark:hover:bg-indigo-800 rounded-xl">
              <RouterLink :to="child.path" :class="[
                'block transition duration-300 transform',
                $route.path === child.path
                  ? 'text-indigo-800 dark:text-indigo-200 border-b-2 border-indigo-700 dark:border-indigo-300 pointer-events-none'
                  : 'text-gray-800 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-indigo-200 hover:scale-105'
              ]">
                {{ child.name }}
              </RouterLink>
            </li>
          </ul>
        </li>
      </ul>


      <div class="hidden lg:block">
        <RouterLink to="/login" class="bg-indigo-600 hover:bg-indigo-700 text-lg text-white px-4 py-2 rounded-full">
          登入
        </RouterLink>
      </div>

      <button class="lg:hidden" @click="toggleMenu">
        <span v-if="!NavigationBarMenuOpen"
          class="text-gray-800 dark:text-gray-50 hover:text-indigo-800 dark:hover:text-indigo-200 p-1 border-2 rounded-lg">☰</span>
        <span v-else
          class="text-gray-800 dark:text-gray-50 hover:text-indigo-800 dark:hover:text-indigo-200 p-1 border-2 rounded-lg">✕</span>
      </button>
    </nav>

    <!-- 手機版選單 -->
    <transition name="fade">
      <div v-if="NavigationBarMenuOpen"
        class="lg:hidden py-5 px-5 bg-indigo-50 dark:bg-indigo-950 space-y-3 text-base text-end">
        <template v-for="link in navItems" :key="link.path">
          <div v-if="link.children.length">
            <a @click="toggleSubMenu(link.path)"
              class="block py-3 text-gray-800 dark:text-gray-50 hover:text-indigo-800 dark:hover:text-indigo-200 cursor-pointer">
              {{ link.name }}
            </a>
            <transition name="fade">
              <div v-if="activeSubMenu === link.path" class="pl-5 space-y-2 text-sm">
                <RouterLink v-for="child in link.children" :key="child.path" :to="child.path"
                  @click="NavigationBarMenuOpen = false"
                  class="block py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-700 dark:hover:text-indigo-100">
                  {{ child.name }}
                </RouterLink>
              </div>
            </transition>
          </div>
          <RouterLink v-else :to="link.path" @click="NavigationBarMenuOpen = false"
            class="block py-3 text-gray-800 dark:text-gray-50 hover:text-indigo-800 dark:hover:text-indigo-200">
            {{ link.name }}
          </RouterLink>
        </template>

        <RouterLink to="" @click="NavigationBarMenuOpen = false"
          class="block py-3 text-gray-800 dark:text-gray-50 hover:text-indigo-800 dark:hover:text-indigo-200">
          登入
        </RouterLink>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
