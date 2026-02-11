<script setup lang="ts">
import BoardGridItem from "@/components/BoardGridItem.vue";
</script>

<template>
  <div>
    <section class="page-hero" style="min-height: 200px; background: var(--bg-darker);">
      <div class="page-hero-content">
        <h1>Bestyrelsen</h1>
      </div>
    </section>

    <section class="section">
      <div class="board-grid">
        <BoardGridItem title="Formand" name="Ole Kallehave" photo="/board/ole.jpg" email="ole@rocha.dk" phone="+45 30201071"/>
        <BoardGridItem title="Næstformand" name="Mads Kramme" photo="/board/mads_kramme.jpg" email="mads@rohdekramme.dk"/>
        <BoardGridItem title="Kasserer" name="Mads Jon Nielsen" photo="/board/mads_jon.png" email="madsjon@gmail.com" phone="+45 25726420"/>
        <BoardGridItem title="Medlem" name="Johnny Wishoff" photo="/board/johnny.jpg" email="johnnywishoff@gmail.com"/>
        <BoardGridItem title="Medlem" name="Torsten" photo="/board/torsten.jpg" email="torsten@topbjerg.dk" phone="+45 52584736"/>
      </div>
    </section>
  </div>
</template>
