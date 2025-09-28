<script setup lang="ts">
</script>

<template>
  <div>
    <div class="uk-container">
      <nav uk-dropnav close-on-scroll="true" animation="uk-none-animation">
        <ul class="uk-subnav">
          <li><NuxtLink class="uk-logo" to="/"><img alt="Logo" src="/logo.png" style="height: 5em;"></NuxtLink></li>
          <li><NuxtLink to="tilmeld">Tilmeld</NuxtLink></li>
          <li>
            <a href="#">Hold <span uk-drop-parent-icon/></a>
            <div class="uk-dropdown uk-drop">
              <ul class="uk-nav uk-dropdown-nav">
                <li><NuxtLink to="fortnite">Fortnite</NuxtLink></li>
                <li><NuxtLink to="counterstrike">Counter-Strike</NuxtLink></li>
                <li><NuxtLink to="minecraft">Minecraft</NuxtLink></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Andet <span uk-drop-parent-icon/></a>
            <div class="uk-dropdown uk-drop">
              <ul class="uk-nav uk-dropdown-nav">
                <li><NuxtLink to="bestyrelsen">Bestyrelsen</NuxtLink></li>
                <li><NuxtLink to="vedtaegter">Vedtægter</NuxtLink></li>
                <!--<li><NuxtLink to="/ordensregler">Ordensregler</NuxtLink></li>-->
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>

    <slot/>
  </div>
</template>

<style>
body {
  --sb-track-color: rgba(0, 0, 0, 0);
  --sb-thumb-color: #7e7e7e;
  --sb-size: 6px;
  --sb-raduis: 6px;
  overflow: scroll;
}

body::-webkit-scrollbar {
  width: var(--sb-size);
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: var(--sb-raduis);;
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: var(--sb-raduis);;
}

@supports not selector(::-webkit-scrollbar) {
  body {
    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
  }
}
</style>
