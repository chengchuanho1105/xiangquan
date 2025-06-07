<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

// 載入個個Layout
import AdminLayout from '@/layouts/AdminLayout.vue'
import CustomerLayout from '@/layouts/CustomerLayout.vue'
import CrazyClownLayout from '@/layouts/CrazyClownLayout.vue'
import PublicLayout from './layouts/PublicLayout.vue'

// 品牌切換
import { useBrandStore } from '@/stores/brand'

const route = useRoute()
const brandStore = useBrandStore()

// Layout 選擇
const layoutComponent = computed(() => {
  console.log(route.meta.layout)
  const layout = route.meta.layout
  switch (layout) {
    case 'admin':
      return AdminLayout
    case 'customer':
      return CustomerLayout
    case 'crazyclown':
      return CrazyClownLayout
    case 'public':
      return PublicLayout
    default:
      return PublicLayout
  }
})

// 根據 layout 自動切換品牌
watch(layoutComponent, (layout) => {
  switch (layout) {
    case CrazyClownLayout:
      brandStore.currentBrand = 'crazyclown'
      break
    case AdminLayout:
    case CustomerLayout:
      brandStore.currentBrand = 'xiangchuan'
      break
    default:
      brandStore.currentBrand = 'xiangchuan'
      break
  }
}, { immediate: true })
</script>

<template>
  <component :is="layoutComponent" />
</template>

<style scoped></style>
