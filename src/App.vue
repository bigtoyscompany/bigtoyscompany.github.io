<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import VerifyModal from "@/components/VerifyModal.vue";
import { ref } from "vue";

const verifying = ref(false);
const verified = ref(false);
const route = useRoute();

function onVerifyFinish(success: boolean) {
  verifying.value = false;
  verified.value = success;
}
function sendMail() {
  window.location.href = 'mailto:hi@nai.ba'
}
</script>

<template>
  <RouterLink to="/" class="block w-fit">
    <header class="mb-4 font-black">
      <h1 class="text-4xl md:text-7xl">👋</h1>
    </header>
  </RouterLink>

  <main>
    <RouterView />
  </main>

  <VerifyModal :show="verifying" @finish="onVerifyFinish" />

  <footer>
    <p class="text-xl md:text-2xl">{{ $t('ui.vision') }}</p>
    <button @click="verified ? sendMail() : verifying = true"
      class="mt-6 text-xl md:text-2xl font-bold	 color-black border-4 p-4 rounded-xl">
      {{ verified ? 'hi+' + (route.params.domain ?? '5.nu') + '@nai.ba' : $t('ui.get_in_touch') }}
    </button>
    <div class="mt-10 border-t-4 pt-4 border-white flex place-content-between items-center">
      <p class="text-base md:text-2xl">
        <img class="inline-block h-10" src="@/assets/hi.png" />
        2022 &copy; Hi five
      </p>
      <a class="h-7 md:h-10" title="米表联盟[Domain.Cards]" href="https://domain.cards/">
        <img class="h-full" src="https://domain.cards/api/badge/5.nu" /></a>
    </div>
  </footer>
</template>

<style scoped>
button {
  background-color: rgb(34, 39, 43);
  border-color: rgb(34, 39, 43);
}

button:hover {
  background-color: rgb(69, 79, 89);
  border-color: rgb(69, 79, 89);
}
</style>
