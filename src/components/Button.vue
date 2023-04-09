<script setup>
import { defineProps } from "vue"

let props = defineProps({
    text: {
        type: String,
        required: true
    },
    color1: {
        type: String,
        required: false
    },
    color2: {
        type: String,
        required: false
    }
})
</script>

<template>
  <div :style="{ 'background': props.color1 }" class="a" href="#">
    <div :style="{ 'background': props.color2 }" class="wave-1"></div>
    <div :style="{ 'background': props.color2 }" class="wave-2"></div>
    <span>{{ props.text }}</span>
  </div>

</template>


<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
}

.a {
  position: relative;
  padding: 0.8rem 0.8rem;
  text-decoration: none;
  font-size: 1em;
  display: inline-block;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  overflow: hidden;
  border-radius: 5px;
  margin-right: 0px;
  background-color: #2f99f0; /* Light */
  background-color: #1067ae; /* Dark */
}

.a div[class^="wave-"] {
  position: absolute;
  z-index: 0;
  height: 200px;
  width: 200px;
  
  border-radius: 47%;
  
  opacity: .5;

}
.a div.wave-1 {
  background-color: #1881d7;
  left: 85px;
  bottom: -10px;
  transform: rotate(20deg);
}

.a div.wave-2 {
  background-color: #1d78c3;
  top: -10px;
  transform: rotate(180deg);
  right: 100px;
}

span {
  position: relative; /*Brings the text to the top;*/
}

.a:hover .wave-1 {
  animation: wave-1 6s infinite linear;
}

.a:hover .wave-2 {
  animation: wave-2 6s infinite linear;
}

@keyframes wave-1 {
  0% {
    transform: rotate3d(0,0,1,20deg);
  }
  
  50% {
    transform: rotate3d(0,0,1,200deg);
    
  }
  
  100% {
    transform: rotate3d(0,0,1,380deg);
  }
}

@keyframes wave-2 {
  0% {
    transform: rotate3d(0,0,1,180deg);
  }
  
  50% {
    transform: rotate3d(0,0,1,0deg);
    right: 110px;
  }
  
  100% {
    transform: rotate3d(0,0,1,-180deg);
  }
}
</style>