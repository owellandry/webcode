<script setup>
import HomeViews from './views/HomeViews.vue';
import SubTitle from './components/SubTitle.vue';
import Services from './views/Services.vue';
import AsiTrabajamos from './components/AsiTrabajamos.vue';
import { useThemeMode } from './store/themeMode'
const store = useThemeMode();

document.body.style.backgroundColor = store.stateTheme == "dark" ? '#131417' : '#f5f5f5';
</script>

<template>
    <HomeViews />
<div class="margin" :class="{  'white': store.stateTheme == 'light', 'black': store.stateTheme == 'dark' }" >
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

<style>
.white{
    background-color: #f5f5f5 !important;
    transition: background-color 0.3s;
}

.black{
    background-color: #131417 !important;
    transition: background-color 0.3s;
}

.colorWhite{
    color: #f5f5f5 !important;;
}

.margin{
    padding: 0 50px 0 50px;
}
@media (max-width: 1024px){
   .margin{
    padding: 0 30px 0 30px;
    }   
}
@media (max-width: 350px){
   .margin{
    padding: 0 15px 0 15px;
    }   
}
</style>
