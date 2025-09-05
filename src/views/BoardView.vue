<script setup lang="ts">
import BoardGridItem from "@/components/BoardGridItem.vue";
</script>

<template>
  <div class="uk-container">
    <div class="uk-grid-small uk-grid-divider uk-text-center uk-flex-center" uk-grid>
      <BoardGridItem title="Formand" name="Ole Kallehave" photo="/src/assets/board/ole.jpg" phone="+45 30201071" email="ole@rocha.dk"/>
      <BoardGridItem title="Næstformand" name="Mads Kramme" photo="/src/assets/board/mads_kramme.jpg" phone="+45 30200909" email="mads@rohdekramme.dk"/>
      <BoardGridItem title="Kasserer" name="Mads Jon Nielsen" photo="/src/assets/board/mads_jon.png" phone="+45 25726420" email="madsjon@gmail.com"/>
      <BoardGridItem title="Medlem" name="Johnny Wishoff" photo="/src/assets/board/johnny.jpg" phone="" email="johnnywishoff@gmail.com"/>
      <BoardGridItem title="Medlem" name="Torsten " photo="/src/assets/board/torsten.jpg" phone="52584736" email="torsten@topbjerg.dk"/>
    </div>
  </div>
</template>
