<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const lastScrollTop = ref(0)

const onScroll = () => {
    const currentScrollTop = window.scrollY
    if (currentScrollTop > 5) {
        isScrolled.value = true
    } else {
        isScrolled.value = false
    }
    lastScrollTop.value = currentScrollTop
}

onMounted(() => {
    window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

</script>

<template>
    <div class="fixed bottom-5 right-3 z-50 select-none">
        <a v-show="isScrolled" @click.prevent="scrollToTop"
            class="bg-indigo-500 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700">
            <span class="text-lg font-bold text-white">Top</span>
        </a>
    </div>
</template>