<script setup lang="ts">

import Sidebar from '@/components/admin/Sidebar.vue'


</script>

<template>
    <div class="flex min-h-screen">
        <Sidebar />
        <div class="flex-1 p-4">
            <RouterView />
        </div>
    </div>
</template>


<style scoped></style>