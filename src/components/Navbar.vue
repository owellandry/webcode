<template>
    <header :class="{  'white': store.stateTheme == 'light', 'black': store.stateTheme == 'dark'}">
    <div class="container__header">
        
    <div class="menu">
        <nav>
            <ul>
                <li>
                    <div>
                        <RouterLink :class="{  'colorWhite': store.stateTheme == 'dark' }" :to="{ name: 'home' }" >Inicio</RouterLink>
                        <div class="hoverLink2"></div>
                    </div>
                </li>
                <li>
                    <div>
                        <RouterLink :class="{  'colorWhite': store.stateTheme == 'dark' }" :to="{ name: 'home' }" >Servicios</RouterLink>
                        <div class="hoverLink2"></div>
                    </div>
                </li>
                <li>
                    <div>
                    <RouterLink :class="{  'colorWhite': store.stateTheme == 'dark' }" :to="{ name: 'home' }" >Nosotros</RouterLink>
                    <div class="hoverLink2"></div>
                </div>
                </li>
                <li>
                    <div>
                    <RouterLink :class="{  'colorWhite': store.stateTheme == 'dark' }" :to="{ name: 'home' }" >Contacto</RouterLink>
                    <div class="hoverLink2"></div>
                </div>
                </li>
            </ul>
        </nav>
    </div>

    <div class="logo logo-enlace">
        <RouterLink :to="{ name: 'home' }">
        <div class="logo__texto">
            <p :class="{  'colorWhite': store.stateTheme == 'dark' }" :to="{ name: 'home' }">WebCode</p>
        </div>
        <img src="@/assets/logo.png" alt="web code">
        </RouterLink>
    </div>

    <div class="menu-icon">
        <ul>
            <li><a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a></li>
            <li><a href="#"><Instagram /></a></li>
            <li><a href="#"><Whatsapp /></a></li>
            <li><a href="#"><Linkedin /></a></li>
        </ul>
    </div>

    <div :class="{'bars-icon': true, 'barContentR': barsOnRotate}" @click="stateHamburguer">
        <div :class="{'bar1State': barsOn, 'white': store.stateTheme == 'dark', 'black': store.stateTheme == 'light'}"></div>
        <div :class="{'bar2State': barsOn, 'bar2': true,'bar2StateR': barsOnRotate, 'white': store.stateTheme == 'dark', 'black': store.stateTheme == 'light'}"></div>
        <div :class="{'bar3State': barsOn, 'bar3': true,'white': store.stateTheme == 'dark', 'black': store.stateTheme == 'light'}"></div>
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
import { useThemeMode } from '../store/themeMode'
import { ref } from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const store = useThemeMode()

let barsOn = ref(false)
let barsOnRotate = ref(false)

const stateHamburguer = () => {
    barsOn.value ? barsOn.value = false : barsOn.value = true
    setTimeout(() => {
        barsOnRotate.value ? barsOnRotate.value = false : barsOnRotate.value = true
    }, 500)
}

let nightOn = ref(false)
let refMode = ref(store.stateTheme)

const nightOnFunction = () => {
    if(nightOn.value){
        nightOn.value = false 
    }else{
        nightOn.value = true;
    }
    nightOn.value ? store.changeMode("dark") : store.changeMode("light")
    document.body.style.backgroundColor = store.stateTheme == "dark" ? '#131417' : '#f5f5f5';
}



</script>

<style scoped>
@import url(@/assets/css/navBar.css);
</style>