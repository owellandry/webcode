<script setup>
import Navbar from '../components/Navbar.vue';
import Buttom from "../components/Button.vue"
import { useThemeMode } from '../store/themeMode'
import { ref } from "vue"
const store = useThemeMode();

let nightOn = ref(false)

const nightOnFunction = () => {
    nightOn.value ? nightOn.value = false : nightOn.value = true
    nightOn.value ? store.changeMode("dark") : store.changeMode("light")  
};
</script>

<template>

    <Navbar />
    <section :class="{  'white': store.stateTheme == 'light', 'black': store.stateTheme == 'dark', 'banner': true }" >
        <div class="content">
            <h3 :class="{  'colorWhite': store.stateTheme == 'dark' }">Hey_</h3>
            <h2 :class="{  'colorWhite': store.stateTheme == 'dark' }">Somos <span id="text">Web Code</span></h2>
            <p :class="{  'colorWhite': store.stateTheme == 'dark' }">Con nuestro equipo, trabajamos contigo para entender tus necesidades y objetivos, y creamos una <b>página web</b> que no sólo cumple con tus expectativas, sino que las supera. No importa si eres un pequeño negocio, local o una gran empresa, estamos comprometidos en brindarte una presencia en línea única y profesional, que impulse tu negocio al <b>éxito</b>. </p>
            <RouterLink :to="{ 'name': 'home' }"><Buttom text="Ver Mas de Nosotros" /></RouterLink><span class="separador"></span>
            <RouterLink :to="{ 'name': 'home' }"><Buttom color1="#e91e63" color2="#ff4f8b" text="¡Contactanos!" /></RouterLink>
        </div>
        <img src="../assets/pro-removebg-preview.png" alt="web code">
        <div class="dayNight">
            <div class="center">
                <label class="switch">
                    <input type="checkbox" @click="nightOnFunction" >
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url(../assets/css/home.css);

</style>
