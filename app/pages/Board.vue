<script setup lang="ts">
import BoardGridItem from "@/components/BoardGridItem.vue";
import SiteContainer from "@/components/SiteContainer.vue";
</script>

<template>
  <SiteContainer title="Bestyrelsen">
    <div class="uk-grid-divider uk-flex-center uk-flex-left@xl uk-flex-left@l" uk-grid>
      <BoardGridItem title="Formand" name="Ole Kallehave" photo="/board/ole.jpg" email="ole@rocha.dk" phone="+45 30201071"/>
      <BoardGridItem title="Næstformand" name="Mads Kramme" photo="/board/mads_kramme.jpg" email="mads@rohdekramme.dk" phone=""/>
      <BoardGridItem title="Kasserer" name="Mads Jon Nielsen" photo="/board/mads_jon.png" email="madsjon@gmail.com" phone="+45 25726420"/>
      <BoardGridItem title="Medlem" name="Johnny Wishoff" photo="/board/johnny.jpg" email="johnnywishoff@gmail.com" phone=""/>
      <BoardGridItem title="Medlem" name="Torsten " photo="/board/torsten.jpg" email="torsten@topbjerg.dk" phone="+45 52584736"/>
    </div>
  </SiteContainer>


</template>
