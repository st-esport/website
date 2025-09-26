<script setup lang="ts">
</script>

<template>
  <header>
    <div class="uk-container">
      <nav uk-dropnav close-on-scroll="true" animation="uk-none-animation">
        <ul class="uk-subnav">
          <li><RouterLink class="uk-logo" to="/"><img alt="Logo" src="/logo.png" style="height: 5em;"/></RouterLink></li>
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

  <slot/>
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
