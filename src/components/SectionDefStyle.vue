<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: ''
  },
  mainTitle: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
  },
  slogan: {
    type: String,
  }
})
</script>

<template>
  <section :id="id"
    class="my-10 bg-indigo-50 dark:bg-indigo-950 border border-gray-100 dark:border-indigo-900 rounded-lg shadow">
    <div class="pt-5 pr-5 pl-5">
      <div class="ml-2 flex flex-wrap items-end">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
          {{ mainTitle }}
        </h2>
        <h3 class="text-2xl font-bold text-gray-800 dark:text-gray-200 ml-5 hidden md:block">
          {{ subTitle }}
        </h3>
        <span class="ml-auto px-3 text-lg font-bold text-gray-700 dark:text-gray-300 text-end hidden md:block">
          {{ slogan }}
        </span>
      </div>
      <div class="h-1 mt-1 mb-3 bg-gray-300 rounded overflow-hidden">
        <div class="w-[30%] h-full bg-indigo-500 text-lg"></div>
      </div>
    </div>
    <slot />
  </section>
</template>

<style scoped></style>
