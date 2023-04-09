<script setup>
import HomeViews from './views/HomeViews.vue';
import SubTitle from './components/SubTitle.vue';
import Services from './views/Services.vue';
import AsiTrabajamos from './components/AsiTrabajamos.vue';
import { useThemeMode } from './store/themeMode'

const store = useThemeMode()

store.changeMode("dark")
console.log(store.stateTheme);
</script>

<template>
<HomeViews />
<div class="margin">
    <SubTitle text="Servicios" />
    <Services />
    <div style="margin-top: 50px;">
        <SubTitle text="Asi Trabajamos" />
        <AsiTrabajamos />
    </div>
    <div style="margin-top: 50px;">
        <SubTitle text="Contacto" />
    </div>
</div>
</template>

<style scoped>
.margin{
    margin: 0 50px 0 50px;
}
@media (max-width: 1024px){
   .margin{
        margin: 0 30px 0 30px;
    }   
}
@media (max-width: 350px){
   .margin{
        margin: 0 15px 0 15px;
    }   
}
</style>
