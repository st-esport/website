<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <div>
    <header class="site-header">
      <div class="uk-container">
        <nav class="site-nav">
          <NuxtLink class="site-logo" to="/">
            <img alt="Støvring eSport Logo" src="/logo.png">
            <span>Støvring eSport</span>
          </NuxtLink>

          <button class="mobile-nav-toggle" @click="toggleMobileMenu">
            <span v-if="!mobileMenuOpen">☰</span>
            <span v-else>✕</span>
          </button>

          <ul class="nav-links" :class="{ active: mobileMenuOpen }">
            <li>
              <span>Hold ▾</span>
              <div class="uk-dropdown uk-drop" uk-dropdown="mode: click; pos: bottom-left">
                <ul class="uk-nav uk-dropdown-nav">
                  <li><NuxtLink to="/fortnite" @click="mobileMenuOpen = false">Fortnite</NuxtLink></li>
                  <li><NuxtLink to="/counterstrike" @click="mobileMenuOpen = false">Counter-Strike</NuxtLink></li>
                  <li><NuxtLink to="/minecraft" @click="mobileMenuOpen = false">Minecraft</NuxtLink></li>
                </ul>
              </div>
            </li>
            <li>
              <span>Om os ▾</span>
              <div class="uk-dropdown uk-drop" uk-dropdown="mode: click; pos: bottom-left">
                <ul class="uk-nav uk-dropdown-nav">
                  <li><NuxtLink to="/bestyrelsen" @click="mobileMenuOpen = false">Bestyrelsen</NuxtLink></li>
                  <li><NuxtLink to="/vedtaegter" @click="mobileMenuOpen = false">Vedtægter</NuxtLink></li>
                </ul>
              </div>
            </li>
            <li><NuxtLink to="/tilmeld" class="nav-cta" @click="mobileMenuOpen = false">Tilmeld</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <slot/>
    </main>

    <footer class="site-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <img alt="Støvring eSport" src="/logo.png">
          <p>Fremmer børns sociale kundskaber og IT-færdigheder igennem gaming.</p>
        </div>

        <div class="footer-section">
          <h4>Hold</h4>
          <ul>
            <li><NuxtLink to="/fortnite">Fortnite</NuxtLink></li>
            <li><NuxtLink to="/counterstrike">Counter-Strike</NuxtLink></li>
            <li><NuxtLink to="/minecraft">Minecraft</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Info</h4>
          <ul>
            <li><NuxtLink to="/bestyrelsen">Bestyrelsen</NuxtLink></li>
            <li><NuxtLink to="/vedtaegter">Vedtægter</NuxtLink></li>
            <li><NuxtLink to="/tilmeld">Tilmeld</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Kontakt</h4>
          <ul>
            <li><a href="mailto:adm@stoevring-esport.dk">adm@stoevring-esport.dk</a></li>
            <li>Grangårdscentret 27</li>
            <li>9530 Støvring</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Støvring eSport. Alle rettigheder forbeholdes.</p>
        <div class="social-links">
          <a href="https://www.facebook.com/stoevringesport" target="_blank" rel="noopener">Facebook</a>
        </div>
      </div>
    </footer>
  </div>
</template>
