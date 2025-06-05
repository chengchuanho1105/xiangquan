<script setup lang="ts">

</script>

<template>
    <div class="p-6 max-w-5xl mx-auto">
        <h1 class="text-3xl font-bold mb-4">聯絡我們</h1>
        <form class="space-y-4 max-w-md">
            <div>
                <label for="name" class="block mb-1 font-medium">姓名</label>
                <input id="name" type="text" class="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div>
                <label for="email" class="block mb-1 font-medium">電子郵件</label>
                <input id="email" type="email" class="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div>
                <label for="message" class="block mb-1 font-medium">訊息</label>
                <textarea id="message" rows="4" class="w-full border border-gray-300 rounded px-3 py-2"></textarea>
            </div>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">送出</button>
        </form>
    </div>
</template>
