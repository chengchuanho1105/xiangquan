<script setup lang="ts">

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import companyProfile from '@/config/companyProfiles/xiangchaunProfile'

const currentRole = 'customer'

</script>

<template>
    <div id="CustomerLayout" class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark-gray-100">
        <header>
            <Navbar :companyProfile="companyProfile" :currentRole="currentRole" />
        </header>
        <main class="">
            <slot>
                <RouterView />
            </slot>
        </main>
        <Footer :companyProfile="companyProfile" />
    </div>
</template>

<style scoped></style>