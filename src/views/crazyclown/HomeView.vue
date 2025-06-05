<script setup lang="ts">


import SectionDefStyle from '@/components/SectionDefStyle.vue'
import TimeLine from '@/components/TimrLine.vue'

import heroImg from '@/assets/media/圖片1.png'

function scrollTo(where: string) {
  const target = document.querySelector(where)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>

  <!--
  <section id="banner">
    <div class="relative flex flex-col justify-center items-center banner">
      <a @click.prevent="scrollToHero" class="scroll-hint absolute bottom-[50px] left-[50%] translate-x-[-50%] flex">
        <span class="text-lg text-white text-center text-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]">
          向下瀏覽<br /><i class="bi bi-chevron-double-down"></i>
        </span>
      </a>
    </div>
    <div class="h-full flex items-center justify-start aos-init aos-animate" style="background-image: url('');">
    </div>
  </section>
  -->



  <section id="home-hero">
    <div class="bg-white dark:bg-indigo-950 grid h-screen place-content-center">
      <div class="mx-auto w-screen max-w-screen-xl px-5 md:grid md:grid-cols-2 md:items-center md:gap-5">

        <div class="w-full flex items-center justify-center md:h-[70svh] mb-10 md:mb-0 rounded-xl" data-aos="zoom-in">
          <img class="rounded-xl" :src="heroImg" alt="">
        </div>

        <div class="max-w-prose text-left" data-aos="zoom-in">
          <h2 class="text-3xl font-bold text-indigo-800 dark:text-indigo-400 sm:text-5xl">
            <strong class="text-indigo-800 dark:text-indigo-200"> S級公會·強者集結 </strong> <br>
            <span class="text-indigo-800 dark:text-indigo-200"> Crazy_Clown </span>等你來戰。
          </h2>

          <p class="mt-4 text-base text-pretty text-indigo-700 dark:text-indigo-300 sm:text-lg/relaxed">
            <strong>Crazy_Clown是你最佳的戰友陣線！</strong><br>
            無論你是剛起步的新手，還是久經沙場的老兵，只要你是高活躍玩家，要的就是你！<br>
          </p>

          <div class="mt-4 flex gap-4 sm:mt-6">
            <a class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-indigo-50 shadow-sm transition-colors hover:bg-indigo-700"
              @click.prevent="scrollTo('#home-joinStep')" href="">
              加入我們
            </a>

            <a class="inline-block rounded border border-indigo-200 px-5 py-3 font-medium text-indigo-700 dark:text-indigo-300 shadow-sm transition-colors hover:bg-indigo-50 hover:text-indigo-900"
              @click.prevent="scrollTo('#home-about')" href="">
              了解更多
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>

  <div class="max-w-[1024px] container mx-auto p-3">

    <SectionDefStyle id="home-joinStep" mainTitle="加入步驟" subTitle="Join Step" slogan="加入超簡單，只要五步" data-aos="fade-up">
      <div class="p-5">
        <div class="py-5 text-center">
          <p class="text-xl font-bold ">⚠️ 請完成下列步驟後，等候審核，任何一個步驟沒做，系統就無法作業，不會有後續作業，請注意！</p>
        </div>
        <TimeLine index="1" mainTitle="加入Discord" subTitle="Join Discord"
          description='<a href="https://discord.gg/3TEHPZhYUK" target="_blank" class="text-indigo-600 dark:text-indigo-400 underline"><strong>點我加入戰隊 Discord 社群</strong></a><br>或輸入網址：<a href="https://discord.gg/3TEHPZhYUK" target="_blank" class="text-indigo-600 dark:text-indigo-400 underline"><strong>https://discord.gg/3TEHPZhYUK</strong></a>'
          data-aos="fade-up">
          <template #icon>
            <i class="bi bi-discord w-12 h-12 text-5xl"></i>
          </template>
        </TimeLine>
        <TimeLine index="2" mainTitle="同意戰隊規範" subTitle="Agree to Rules"
          description='<a href="https://discord.com/channels/490129931808931840/1226445478124716075" target="_blank" class="text-indigo-600 dark:text-indigo-400 underline"><strong>點我前往同意規範</strong></a><br>'
          data-aos="fade-up">
          <template #icon>
            <i class="bi bi-file-earmark-check w-12 h-12 text-5xl"></i>
          </template>
        </TimeLine>
        <TimeLine index="3" mainTitle="完成自我介紹" subTitle="Introduce Yourself"
          description='<a href="https://discord.com/channels/490129931808931840/1226549886145527999" target="_blank" class="text-indigo-600 dark:text-indigo-400 underline"><strong>點我前往自我介紹</strong></a><br><a href="https://discord.com/channels/490129931808931840/1358013101491880018" target="_blank" class="text-indigo-600 dark:text-indigo-400 underline"><strong>點我看自我介紹格式</strong></a>'
          data-aos="fade-up">
          <template #icon>
            <i class="bi bi-person-lines-fill w-12 h-12 text-5xl"></i>
          </template>
        </TimeLine>
        <TimeLine index="4" mainTitle="填寫申請入隊" subTitle="Fill Out Application"
          description='<a href="https://discord.com/channels/490129931808931840/1359386883062501536" target="_blank" class="text-indigo-600 dark:text-indigo-400 underline"><strong>點我填寫申請入隊</strong></a><br>'
          data-aos="fade-up">
          <template #icon>
            <i class="bi bi-journal-text w-12 h-12 text-5xl"></i>
          </template>
        </TimeLine>
        <TimeLine index="5" mainTitle="遊戲申請加入" subTitle="Apply to join In-Game" description="" data-aos="fade-up">
          <template #icon>
            <i class="bi bi-controller w-12 h-12 text-5xl"></i>
          </template>
        </TimeLine>
      </div>
    </SectionDefStyle>

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