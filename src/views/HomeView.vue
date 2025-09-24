<script setup lang="ts">
import SiteContainer from "@/components/SiteContainer.vue";
</script>

<template>
  <SiteContainer title="Velkommen!" photo="/home_banner.jpg">
    <p>Du er altid velkommen til at kigge ned for at se lokalerne eller få hjælp til teknikken.</p>
    <p>Vi tilbyder tre forskellige hold. <RouterLink to="fortnite">Fortnite</RouterLink>, <RouterLink to="counterstrike">Counter-Strike</RouterLink> og <RouterLink to="minecraft">Minecraft</RouterLink></p>
    <p>Tryk <RouterLink to="tilmeld">tilmeld</RouterLink>, hvis du ønsker at tilmelde dig. Det koster 500 kr. hvert halve år.</p>
    <p>Har du spørgsmål eller ønsker at hjælpe til i foreningen, så kontakt os endelig på <a href="https://www.facebook.com/stoevringesport">https://www.facebook.com/stoevringesport</a></p>

      <div class="fb-page"
           data-tabs="timeline"
           data-href="https://www.facebook.com/stoevringesport"
           data-width="500"
           data-hide-cover="false"></div>

  </SiteContainer>
</template>
