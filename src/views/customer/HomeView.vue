<script setup lang="ts">
import seo from '@/config/seos/xiangchaunSeo.ts'

document.title = seo.title

</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">歡迎來到 {{ seo.title }}</h1>
    <p class="mt-2 text-gray-600">{{ seo.description }}</p>
  </div>
</template>
