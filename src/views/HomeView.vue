<script setup lang="ts">
import SiteContainer from "@/components/SiteContainer.vue";
import {RouterLink} from "vue-router";
</script>

<template>
  <SiteContainer title="Velkommen!" photo="/home_banner.jpg">
    <p>Du er altid velkommen til at kigge ned for at se lokalerne eller få hjælp til teknikken.</p>
    <p>Vi tilbyder tre forskellige hold. <RouterLink to="fortnite">Fortnite</RouterLink>, <RouterLink to="counterstrike">Counter-Strike</RouterLink> og <RouterLink to="minecraft">Minecraft</RouterLink></p>
    <p>Tryk <RouterLink to="tilmeld">tilmeld</RouterLink>, hvis du ønsker at tilmelde dig. Det koster 500 kr. hvert halve år.</p>
    <p>Har du spørgsmål eller ønsker at hjælpe til i foreningen, så kontakt os endelig på <a href="https://www.facebook.com/stoevringesport">https://www.facebook.com/stoevringesport</a></p>

      <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fstoevringesport&tabs=timeline&width=500&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
          width="500" height= "700" style="border:none;overflow:hidden"
          allowfullscreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
      </iframe>

  </SiteContainer>
</template>
