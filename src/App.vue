<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import AdminLayout from '@/layouts/AdminLayout.vue'
import CustomerLayout from '@/layouts/CustomerLayout.vue'
import CrazyClownLayout from '@/layouts/CrazyClownLayout.vue'
import PublicLayout from './layouts/PublicLayout.vue'

const route = useRoute()

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
</script>

<template>
  <component :is="layoutComponent" />
</template>

<style scoped></style>
