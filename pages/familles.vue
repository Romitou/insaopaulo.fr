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
        <div class="container">
          abc
        </div>
      </div>
      <div class="section footer"></div>
    </div>
</template>
<script setup>
import {runColorMode, setDarkMode, unsetDarkMode, toggleDarkMode} from '~/assets/darkMode.js'

onMounted(() => {
  runColorMode((isDarkMode) => {
    if (isDarkMode) {
      setDarkMode();
    } else {
      unsetDarkMode();
    }
  })
})

function goToSection (page, section) {
  document.querySelector('div.page.'+page).scrollTo({top: document.querySelector('div.section.'+section).clientHeight, behavior: 'smooth',});
}
</script>
