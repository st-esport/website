<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <div class="uk-container">
    <nav uk-dropnav close-on-scroll="true" animation="uk-none-animation">
      <ul class="uk-subnav">
        <li><RouterLink class="uk-logo" to="/"><img alt="Logo" src="@/assets/logo.png" style="height: 5em;"/></RouterLink></li>
        <li><RouterLink to="tilmeld">Tilmeld</RouterLink></li>
        <li>
          <a href="#">Hold <span uk-drop-parent-icon></span></a>
          <div class="uk-dropdown">
            <ul class="uk-nav uk-dropdown-nav">
              <li><RouterLink to="fortnite">Fortnite</RouterLink></li>
              <li><RouterLink to="counterstrike">Counter-Strike</RouterLink></li>
              <li><RouterLink to="minecraft">Minecraft</RouterLink></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Andet <span uk-drop-parent-icon></span></a>
          <div class="uk-dropdown">
            <ul class="uk-nav uk-dropdown-nav">
              <li><RouterLink to="bestyrelsen">Bestyrelsen</RouterLink></li>
              <li><RouterLink to="vedtaegter">Vedtægter</RouterLink></li>
              <!--<li><RouterLink to="/ordensregler">Ordensregler</RouterLink></li>-->
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    </div>
  </header>

  <RouterView/>

  <footer class="uk-section uk-section-secondary uk-section-small uk-margin-large-top">
    <div class="uk-container">
      <div class="uk-grid-small uk-child-width-1-1 uk-child-width-1-3@m" uk-grid>
        <div>
          <h3 class="uk-text-bold">Støvring eSport</h3>
          <p>Grangårdscentret 27<br>9530 Støvring</p>
        </div>
        <div>
          <h3 class="uk-text-bold">Kontakt</h3>
          <p>
            Tlf: <a href="tel:+4530201071">30 20 10 71</a><br>
            Email: <a href="mailto:adm@stoevring-esport.dk">adm@stoevring-esport.dk</a>
          </p>
        </div>
        <div>
          <h3 class="uk-text-bold">CVR</h3>
          <p>40804838</p>
        </div>
      </div>
    </div>
  </footer>
</template>
