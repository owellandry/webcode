<script setup>
  import Buttom from "../components/Button.vue"
</script>

<template>
    <div class="container">
    <div class="card tra" style="background-color: #e91e6312;">
      <div class="border"></div>
      <img src="../assets/10586-removebg-preview.png" />
      <h1>Diseño web a tu medida</h1>
    </div>
    <div class="card card-color-2">
      <div class="border"></div>
      <img src="../assets/ssl-removebg-preview.png" />
      <h1>Seguros SSL</h1>
    </div>
    <div class="card tra" style="background-color: #e91e6312;">
      <div class="border"></div>
      <img src="../assets/20944154-removebg-preview.png" />
      <h1>Responsive Design</h1>
    </div>

<RouterLink :to="{ 'name': 'home' }" style="display: contents;">
    <div style="margin-bottom: 0;" class="card card-color-3">
      <div class="border"></div>
      <img src="../assets/6029655-removebg-preview.png" />
      <h1 style="text-decoration: underline;" >¡Ver todos nuestros servicios!</h1>
    </div>
</RouterLink>
</div>

<div class="container__banner">
        <div class="banner">
          <div class="banner__icon-heart">
            <img style="height: 110%;" src="../assets/heart_notify.png" id="icon_heart" alt="web code">
          </div>
          <div class="banner__icon-fire">
            <img style="height: 110%;" src="../assets/fire-dynamic-color.png" id="icon_fire" alt="web code">
          </div>
          <div class="banner__text">
            <h2>¿Ya vistes nuestros super paquetes y descuentos?</h2>
            <RouterLink class="d" :to="{ 'name': 'home' }"><Buttom text="VISITA AQUI." /></RouterLink>
          </div>
        </div>
      </div>
</template>

<style scoped>
    @import url(../assets/css/services.css);
</style>