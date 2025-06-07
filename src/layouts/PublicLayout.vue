<script setup lang="ts">

const currentRole = 'public'

</script>

<template>
    <div id="CustomerLayout" class="bg-gray-50 dark:bg-gray-950 text-gray-900 dark-gray-100">
        <header>

        </header>
        <main class="">
            <slot>
                <RouterView />
            </slot>
        </main>
    </div>
</template>

<style scoped></style>