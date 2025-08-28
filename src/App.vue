<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header class="uk-margin-small-bottom">
    <nav class="uk-navbar-container uk-navbar-transparent">
      <div class="uk-container">
        <div uk-navbar>
          <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
              <RouterLink to="/">
                <img alt="Logo" src="@/assets/logo.png" class="uk-padding-small" style="height: 5em;"/>
              </RouterLink>
              <RouterLink to="/hold">Hold</RouterLink>
              <RouterLink to="/bestyrelsen">Bestyrelsen</RouterLink>
              <RouterLink to="/vedtaegter">Vedtægter</RouterLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <RouterView/>
</template>
