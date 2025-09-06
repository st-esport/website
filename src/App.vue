<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <nav class="uk-navbar-container uk-navbar-transparent">
      <div class="uk-container">
        <nav uk-dropnav>
          <ul class="uk-subnav">
            <li><RouterLink class="uk-logo" to="/"><img alt="Logo" src="@/assets/logo.png" style="height: 5em;"/></RouterLink></li>
            <li><RouterLink to="/hold">Hold</RouterLink></li>
            <li><RouterLink to="/tilmeld">Tilmeld</RouterLink></li>

            <li>
              <a href="#"><span uk-drop-parent-icon></span></a>
              <div class="uk-dropdown">
                <ul class="uk-nav uk-dropdown-nav">
                  <li><RouterLink to="/bestyrelsen">Bestyrelsen</RouterLink></li>
<!--                  <li><RouterLink to="/vedtaegter">Vedtægter</RouterLink></li>-->
<!--                  <li><RouterLink to="/ordensregler">Ordensregler</RouterLink></li>-->
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  </header>

  <div class="uk-container">
    <RouterView/>
  </div>

</template>
