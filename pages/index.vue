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

<template>
  <p style="z-index: 99; position: fixed; bottom: 2.5%; right: 2.5%; font-size: 0.75rem; cursor: pointer;" onclick="location.href='mailto: hugoleroifacquet@gmail.com?subject=Integr-INSA'">© - Hugo Leroi--Facquet</p>
    <div data-include="heroBanner" id = 'heroBanner' class = 'page heroBanner active'>
      <div class="section heroBanner">
        <div class="container header">
          <div class="banner">
            <img src="~/assets/images/banner.jpg">
          </div>
          <div class="tabs">
            <p class="tab" v-on:click="goToSection('heroBanner', 'presentation')">Actualités</p>
            <NuxtLink to="/familles">
              <p class="tab">Familles</p>
            </NuxtLink>
          </div>
          <div id="darkmode" v-on:click="toggleDarkMode()">
            <svg id="light" style="opacity: 0;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            <svg id="dark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          </div>
        </div>
        <div class="container presentation">
          <h1>INSA'o Paulo :<br> <span class="accent">Expérience</span> unique</h1>
          <p>Participez à la journée d'intégration et vivez un moment<br>inoubliable.
            Faites connaissance avec la promo 2024.
          </p>
          <div class="cta">
            <div class="action"><p>En savoir plus</p></div>
            <div class="action" onclick="window.open(
                'https://www.youtube.com/watch?v=C8HOnr5GoUY&pp=ygULaW5zYW8gcGF1bG8%3D',
                '_blank'
              )">
              <svg id="ytLogo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              <p>Voir RAP</p>
            </div>
          </div>
        </div>
        <div class="container illustration">
          <img id="illustration" src="~/assets/images/logo.png">
        </div>
      </div>
      <div class="section presentation">
        <div class="container bento">
          <div class="box one"><div class="overlay"></div></div>
          <div class="box two"><div class="overlay"></div></div>
          <div class="box three"><div class="overlay"></div></div>
          <div class="box four"><div class="overlay"></div></div>
        </div>
      </div>
      <div class="section footer"></div>
    </div>
</template>
