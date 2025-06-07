<script setup lang="ts">

import SectionDefStyle from '@/components/SectionDefStyle.vue'

function scrollTo(where: string) {
  const target = document.querySelector(where)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>

  <section id="home-hero">
    <div class="bg-white dark:bg-indigo-950 grid h-screen place-content-center">
      <div class="mx-auto w-screen max-w-screen-xl px-5 md:grid md:grid-cols-2 md:items-center md:gap-5">

        <div class="w-full flex items-center justify-center md:h-[70svh] mb-10 md:mb-0 rounded-xl" data-aos="zoom-in">
          <img class="rounded-xl" src="" alt="">
        </div>

        <div class="max-w-prose text-left" data-aos="zoom-in">
          <h3 class="text-3xl font-bold text-gray-800 dark:text-indigo-400 sm:text-5xl">
            <strong class="text-indigo-800 dark:text-indigo-200"> 祥銓 </strong> <br>
            <span class="text-indigo-800 dark:text-indigo-200"> 祥銓 </span>祥銓。
          </h3>

          <p class="mt-4 text-xl text-pretty text-gray-700 dark:text-indigo-300">
            <strong class="text-indigo-700">祥銓</strong><br>
            祥銓<br>
          </p>

          <div class="mt-4 flex gap-4 sm:mt-6">
            <a class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-indigo-50 shadow-sm transition-colors hover:bg-indigo-700"
              @click.prevent="scrollTo('#home-about')" href="">
              了解更多
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <div class="max-w-[1024px] container mx-auto p-3">

    <SectionDefStyle id="home-about" mainTitle="關於我們" subTitle="about" slogan="" data-aos="fade-up">
      <div class="p-5">

      </div>
    </SectionDefStyle>

    <SectionDefStyle id="home-event" mainTitle="最新活動" subTitle="event" slogan="" data-aos="fade-up">
      <div class="p-5">

      </div>
    </SectionDefStyle>

    <SectionDefStyle id="home-news" mainTitle="最新公告" subTitle="news" slogan="" data-aos="fade-up">
      <div class="p-5">

      </div>
    </SectionDefStyle>

  </div>

</template>


<style scoped>
.banner {
  background-image: url('https://picsum.photos/1920/1080');
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100svh;
}

.scroll-hint {
  animation: scrollDown 1.5s infinite;
}

@keyframes scrollDown {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0);
  }
}
</style>