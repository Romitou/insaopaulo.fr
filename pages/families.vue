<template>
  <p style="z-index: 99; position: fixed; bottom: 2.5%; right: 2.5%; font-size: 0.75rem; cursor: pointer;" onclick="location.href='mailto: hugoleroifacquet@gmail.com?subject=Integr-INSA'">© - Hugo Leroi--Facquet</p>
    <div data-include="heroBanner" id = 'heroBanner' class = 'page heroBanner active'>
      <div class="section heroBanner">
        <div class="container header">
          <div class="banner">
            <img src="~/assets/images/banner.jpg">
          </div>
          <div class="tabs">
            <NuxtLink to="/">
              <p class="tab">Accueil</p>
            </NuxtLink>
            <p class="tab">Familles</p>
          </div>
          <div id="darkmode" v-on:click="toggleDarkMode()">
            <svg id="light" style="opacity: 0;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            <svg id="dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          </div>
        </div>
        <div class="flex mt-24 md:mt-32 w-full justify-center">
          <div class="flex space-y-3 flex-col max-w-xl w-full">
            <div class="grid grid-cols-3 gap-1 justify-end items-end p-2 w-full">
              <div class="flex flex-col items-center">
                <div v-if="getFamilyAt(1)" class="flex text-slate-400 flex-col py-2 mb-1 items-center text-sm">
                  <p class="p-2">
                    {{ getFamilyAt(1).name }}
                  </p>
                  <div>{{ getFamilyAt(1).score }} points</div>
                </div>
                <p :class="`w-full h-28 bg-gradient-to-b rounded-tl-xl border-slate-700 ${status === 'success' ? 'from-[#4bbb3b]' : 'from-gray-700 animate-pulse'} flex items-center justify-center text-3xl`">
                  #2
                </p>
              </div>
              <div class="flex flex-col items-center">
                <div v-if="getFamilyAt(0)" class="flex text-slate-400 flex-col py-2 mb-1 items-center text-sm">
                  <p class="p-2">
                    {{ getFamilyAt(0).name }}
                  </p>
                  <div>{{ getFamilyAt(0).score }} points</div>
                </div>
                <p :class="`w-full h-40 bg-gradient-to-b rounded-t-xl  border-slate-700 ${status === 'success' ? 'from-[#ffe141]' : 'from-gray-700 animate-pulse'} flex items-center justify-center text-3xl`">
                  #1
                </p>
              </div>
              <div class="flex flex-col items-center ">
                <div v-if="getFamilyAt(2)" class="flex text-slate-400 flex-col py-2 mb-1 items-center text-sm">
                  <p class="p-2">
                    {{ getFamilyAt(2).name }}
                  </p>
                  <div>
                    {{ getFamilyAt(2).score }} points
                  </div>
                </div>
                <p :class="`w-full h-20 bg-gradient-to-b rounded-tr-xl border-slate-700 ${status === 'success' ? 'from-[#00522a]' : 'from-gray-700 animate-pulse'} flex items-center justify-center text-3xl`">
                  #3
                </p>
              </div>
            </div>
            <div class="flex flex-col space-y-5 w-full p-4">
              <div v-if="status === 'success'" v-for="(family, i) in getFamiliesToShow()" :key="family.name">
                <LeadElement :loaded="true" :position="i + 4" :name="family.name" :score="family.score" />
              </div>
              <div v-else v-for="i in 5">
                <LoadingLeadElement :position="i" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section footer"></div>
    </div>
</template>
<script setup>
import {runColorMode, setDarkMode, unsetDarkMode, toggleDarkMode} from '~/assets/darkMode.js'
import LoadingLeadElement from "~/components/LoadingLeadElement.vue";

const { status, data: families, refresh } = useLazyFetch('/api/families');

const getFamilyAt = (index) => {
  if (!families || !families.value) return null;
  if (index >= families.value.length) return null;
  return families.value[index];
}

const getFamiliesToShow = () => {
  if (!families || !families.value) return [];
  return families.value.slice(3);
}

onMounted(() => {
  runColorMode((isDarkMode) => {
    if (isDarkMode) {
      setDarkMode();
    } else {
      unsetDarkMode();
    }
  })
})
</script>
