<script setup lang="ts">
import SiteContainer from "@/components/SiteContainer.vue";
</script>

<template>
  <SiteContainer title="Velkommen!" photo="/home_banner.jpg">
    <p>Du er altid velkommen til at kigge ned for at se lokalerne eller få hjælp til teknikken.</p>
    <p>Vi tilbyder tre forskellige hold. <NuxtLink to="fortnite">Fortnite</NuxtLink>, <NuxtLink to="counterstrike">Counter-Strike</NuxtLink> og <NuxtLink to="minecraft">Minecraft</NuxtLink></p>
    <p>Tryk <NuxtLink to="tilmeld">tilmeld</NuxtLink>, hvis du ønsker at tilmelde dig. Det koster 500 kr. hvert halve år.</p>
    <p>Har du spørgsmål eller ønsker at hjælpe til i foreningen, så kontakt os endelig på <a href="https://www.facebook.com/stoevringesport">https://www.facebook.com/stoevringesport</a></p>
  </SiteContainer>
</template>
