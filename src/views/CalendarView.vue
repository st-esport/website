<script setup lang="ts">
import SiteContainer from "@/components/SiteContainer.vue";
</script>

<template>
  <SiteContainer title="Kalender">
    <p>Her kan du se vores træningstider og hvornår vi holder ferie.</p>
    <p>Du kan du benytte <a href="https://calendar.google.com/calendar/ical/5c8156dba7078bcaa5862fdfcc0c1d98e4a526995c0ce68b52327a55dd669a55%40group.calendar.google.com/public/basic.ics">dette link</a> for at abonnere på vores træningstider.</p>
    <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FCopenhagen&showPrint=0&showTitle=0&showCalendars=0&showTz=0&src=NWM4MTU2ZGJhNzA3OGJjYWE1ODYyZmRmY2MwYzFkOThlNGE1MjY5OTVjMGNlNjhiNTIzMjdhNTVkZDY2OWE1NUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986cb" width="100%" height="480px" style="border-width:0" />
  </SiteContainer>
</template>
