import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

const faviconMap = {
  xiangchuan: '/favicons/XiangChuanLogo.png',
  crazyclown: '/favicons/CrazyClownLogo.png',
}

export const useBrandStore = defineStore('brand', () => {
  const currentBrand = ref<'xiangchuan' | 'crazyclown'>('xiangchuan')

  // 當品牌變更時自動更新 favicon
  watch(
    currentBrand,
    (brand) => {
      setFavicon(faviconMap[brand] || '')
    },
    { immediate: true },
  )

  return {
    currentBrand,
  }
})

function setFavicon(href: string) {
  const link =
    (document.querySelector("link[rel~='icon']") as HTMLLinkElement) ||
    document.createElement('link')
  link.rel = 'icon'
  link.href = href
  if (!document.head.contains(link)) {
    document.head.appendChild(link)
  }
}
