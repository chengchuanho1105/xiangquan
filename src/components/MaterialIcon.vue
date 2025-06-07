<script setup lang="ts">
import { computed } from 'vue'

interface Props {
    name: string
    size?: number | string // 像 24 或 '2rem' 都能接
    fill?: 0 | 1 // 0=線條，1=實心，預設0
    weight?: number // 100~700，預設400
}

const props = defineProps<Props>()

import type { CSSProperties } from 'vue'

const style = computed<CSSProperties>(() => {
    return {
        fontVariationSettings: `'FILL' ${props.fill ?? 0}, 'wght' ${props.weight ?? 400}, 'GRAD' 0, 'opsz' 24`,
        fontSize: typeof props.size === 'number' ? props.size + 'px' : props.size || '24px',
        WebkitUserSelect: 'none',
        userSelect: 'none' as CSSProperties['userSelect'],
    }
})
</script>

<template>
    <span class="material-symbols-outlined" :style="style">
        {{ name }}
    </span>
</template>
