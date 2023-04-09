<template>
    <header>
    <div class="container__header">
        
    <div class="menu">
        <nav>
            <ul>
                <li>
                    <div>
                        <RouterLink :to="{ name: 'home' }" >Inicio</RouterLink>
                        <div class="hoverLink2"></div>
                    </div>
                </li>
                <li>
                    <div>
                        <RouterLink :to="{ name: 'home' }" >Servicios</RouterLink>
                        <div class="hoverLink2"></div>
                    </div>
                </li>
                <li>
                    <div>
                    <RouterLink :to="{ name: 'home' }" >Nosotros</RouterLink>
                    <div class="hoverLink2"></div>
                </div>
                </li>
                <li>
                    <div>
                    <RouterLink :to="{ name: 'home' }" >Contacto</RouterLink>
                    <div class="hoverLink2"></div>
                </div>
                </li>
            </ul>
        </nav>
    </div>

    <div class="logo logo-enlace">
        <RouterLink :to="{ name: 'home' }">
        <div class="logo__texto">
            <p>WebCode</p>
        </div>
        <img src="@/assets/logo.png" alt="web code">
        </RouterLink>
    </div>

    <div class="menu-icon">
        <ul>
            <li><a href="#"><Facebook /></a></li>
            <li><a href="#"><Instagram /></a></li>
            <li><a href="#"><Whatsapp /></a></li>
            <li><a href="#"><Linkedin /></a></li>
        </ul>
    </div>

    <div :class="{'bars-icon': true, 'barContentR': barsOnRotate}" @click="stateHamburguer">
        <div :class="{'bar1State': barsOn}"></div>
        <div :class="{'bar2State': barsOn, 'bar2': true,'bar2StateR': barsOnRotate}"></div>
        <div :class="{'bar3State': barsOn, 'bar3': true,}"></div>
    </div>
    </div>
    </header>
    <div :class="{'nav-movil': true, 'nav-movil-show': barsOnRotate}">
        <ul>
            <li class="link-mobil"><RouterLink :to="{ name: 'home' }" @click="stateHamburguer" >Inicio</RouterLink></li>
            <li class="link-mobil"><RouterLink :to="{ name: 'home' }" @click="stateHamburguer" >Servicios</RouterLink></li>
            <li class="link-mobil"><RouterLink :to="{ name: 'home' }" @click="stateHamburguer" >Nosotros</RouterLink></li>
            <li class="link-mobil"><RouterLink :to="{ name: 'home' }" @click="stateHamburguer" >Contacto</RouterLink></li>
            <li style="    justify-content: center;display: flex;">
                <div class="dayNight">
            <div class="center">
                <label class="switch">
                    <input type="checkbox" @click="() => { nightOnFunction(); stateHamburguer() }" >
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import Facebook from './icons/Facebook.vue';
import Instagram from "./icons/Instagram.vue";
import Linkedin from "./icons/Linkedin.vue";
import Whatsapp from "./icons/Whatsapp.vue";
import Sun from "./icons/Sun.vue";
import Menu from "./icons/Menu.vue";
import { ref } from "vue"

let barsOn = ref(false)
let barsOnRotate = ref(false)

const stateHamburguer = () => {
    barsOn.value ? barsOn.value = false : barsOn.value = true
    setTimeout(() => {
        barsOnRotate.value ? barsOnRotate.value = false : barsOnRotate.value = true
    }, 500)
}

let nightOn = ref(false)

const nightOnFunction = () => {
    nightOn.value ? nightOn.value = false : nightOn.value = true
}


</script>

<style scoped>
@import url(@/assets/css/navBar.css);
</style>