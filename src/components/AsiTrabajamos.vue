<script setup>
import { ref } from "vue"
import Buttom from "../components/Button.vue"
import { useThemeMode } from '../store/themeMode'
let porcentajeN = ref(5)
let actualN = ref("faceInicial")
  const store = useThemeMode();

const moveBar = (porcentaje, actual) => {
    porcentajeN.value = porcentaje
    actualN.value = actual
};

</script>


<template>

    <section>
        <div class="description">
            <div class="card" :style="{ 'transform': actualN == 'faceInicial' ? 'translate(0)' : 'translate(110%)' }" >
                <div class="margin">
                <img class="iconow" src="https://img.freepik.com/vector-premium/bombilla-rayos-brillan-estilo-dibujos-animados-estilo-plano-estilo-dibujado-mano-estilo-doodle-simbolo-creatividad-innovacion-inspiracion-invencion-e-idea-ilustracion-vectorial_175838-3305.jpg" alt="web code" />
            </div>
            <div>
                <h1 style="margin-bottom: 20px;" :class="{  'colorWhite': store.stateTheme == 'dark' }">Face Inicial</h1>
                <ul class="a">
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">procesos</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">herammientas</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Grupo de trabajos</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Introduccion al proyecto</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Preguntas</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Compromiso</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Breve</li>
                </ul>
            </div>
            </div>

            <div :style="{ 'transform': actualN == 'cotizacion' ? 'translate(0)' : 'translate(-110%)' }" class="card">
                <div class="margin">
                <img class="iconow" src="https://www.gestoriaserclick.es/wp-content/uploads/2021/04/salario-1024x662.jpg" alt="web code" />
            </div>
            <div>
                <h1 :class="{  'colorWhite': store.stateTheme == 'dark' }" style="margin-bottom: 20px;">Cotizacion</h1>
                <ul class="a">
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">procesos</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">herammientas</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Grupo de trabajos</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Introduccion al proyecto</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Preguntas</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Compromiso</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Breve</li>
                </ul>
            </div>
            </div>

            <div :style="{ 'transform': actualN == 'implementacion' ? 'translate(0)' : 'translate(110%)' }" class="card">
                <div class="margin">
                <img class="iconow" src="https://mgx.com.co/wp-content/uploads/2020/06/5-pasos-para-la-implementaci%C3%B3n-exitosa-de-tu-software-ERP.jpg" alt="web code" />
            </div>
            <div>
                <h1 :class="{  'colorWhite': store.stateTheme == 'dark' }" style="margin-bottom: 20px;">Implementacion</h1>
                <ul class="a">
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">procesos</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">herammientas</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Grupo de trabajos</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Introduccion al proyecto</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Preguntas</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Compromiso</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Breve</li>
                </ul>
            </div>
            </div>

            <div :style="{ 'transform': actualN == 'entrega' ? 'translate(0)' : 'translate(-110%)' }" class="card">
                <div class="margin">
                <img class="iconow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTO_FCDb0Wp3-WWiwaS4yRWrm-Qkaj0UrHA&usqp=CAU" alt="web code" />
            </div>
            <div>
                <h1 :class="{  'colorWhite': store.stateTheme == 'dark' }" style="margin-bottom: 20px;">Entrega</h1>
                <ul class="a">
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">procesos</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">herammientas</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Grupo de trabajos</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Introduccion al proyecto</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Preguntas</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Compromiso</li>
                    <li :class="{  'colorWhite': store.stateTheme == 'dark' }">Breve</li>
                </ul>
            </div>
            </div>
        </div>
        <div class="iconos">
            <ul>
                <li @click="moveBar(5, 'faceInicial')">
                    <img src="https://img.freepik.com/vector-premium/bombilla-rayos-brillan-estilo-dibujos-animados-estilo-plano-estilo-dibujado-mano-estilo-doodle-simbolo-creatividad-innovacion-inspiracion-invencion-e-idea-ilustracion-vectorial_175838-3305.jpg" alt="web code">
                    <p :class="{  'colorWhite': store.stateTheme == 'dark' }">Face Inicial</p>
                </li>
                <li @click="moveBar(28, 'cotizacion')">
                    <img src="https://www.gestoriaserclick.es/wp-content/uploads/2021/04/salario-1024x662.jpg" alt="web code">
                    <p :class="{  'colorWhite': store.stateTheme == 'dark' }">Cotizacion</p>
                </li>
                <li @click="moveBar(55, 'implementacion')">
                    <img src="https://mgx.com.co/wp-content/uploads/2020/06/5-pasos-para-la-implementaci%C3%B3n-exitosa-de-tu-software-ERP.jpg" alt="web code">
                    <p :class="{  'colorWhite': store.stateTheme == 'dark' }">Implementacion</p>
                </li>
                <li @click="moveBar(100, 'entrega')">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTO_FCDb0Wp3-WWiwaS4yRWrm-Qkaj0UrHA&usqp=CAU" alt="web code">
                    <p :class="{  'colorWhite': store.stateTheme == 'dark' }">Entrega Final</p>
                </li>
            </ul>
            <div class="linea">
                <div class="progreso"  :style="{ 'width': porcentajeN + '%' }"></div>
            </div>
        </div>
        <div class="nosotros">
           <RouterLink :to="{ 'name': 'home' }"> <Buttom text="Conoce mas sobre nosotros" /> </RouterLink>
        </div>
    </section>

</template>

<style scoped>
@import url(../assets/css/trabajamos.css);
</style>
