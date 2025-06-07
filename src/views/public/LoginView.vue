<script setup lang="ts">
import FormInputPeer from '@/components/FormInputPeer.vue';
</script>

<template>

    <div class="w-full h-screen font-sans bg-cover bg-landscape"
        style="background-image: url('https://picsum.photos/1920/1080');">
        <div class="container flex items-center justify-center flex-1 h-full mx-auto">
            <div class="w-full max-w-lg">
                <form class="max-w-sm p-10 m-auto rounded-xl shadow-xl bg-white/80">
                    <p class="mb-8 text-2xl font-light text-center text-black">
                        Login
                    </p>
                    <div class="mb-8">
                        <FormInputPeer element="input" type="text" id-name="systemID" label="系統代號" required />
                    </div>
                    <div class="mb-8">
                        <FormInputPeer element="input" type="text" id-name="account" label="使用者帳號" required />
                    </div>
                    <div class="mb-8">
                        <FormInputPeer element="input" type="password" id-name="password" label="使用者密碼" required />
                    </div>
                    <div class="flex items-center justify-between mt-4">
                        <button type="submit"
                            class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            登入
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped></style>