<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <div class="uk-container">
    <nav uk-dropnav animation="uk-none-animation">
      <ul class="uk-subnav">
        <li><RouterLink class="uk-logo" to="/"><img alt="Logo" src="@/assets/logo.png" style="height: 5em;"/></RouterLink></li>
        <li><RouterLink to="tilmeld">Tilmeld</RouterLink></li>
        <li>
          <a href="#">Hold <span uk-drop-parent-icon></span></a>
          <div class="uk-dropdown">
            <ul class="uk-nav uk-dropdown-nav">
              <li><RouterLink to="fornite">Fornite</RouterLink></li>
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

  <div class="uk-container uk-padding-small">
    <RouterView/>
  </div>
</template>
