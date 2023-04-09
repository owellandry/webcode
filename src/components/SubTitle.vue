<script setup>
    import { defineProps } from "vue"

    let props = defineProps({
        text: { default: "Web Code", required: true, type: String }
    })

</script>

<template>
    <div style="position: relative; width: max-content;">
        <h2>{{ props.text }}</h2>
        <div class="linea-bottom"></div>
    </div>
</template>    

<style scoped>
    h2{
        font-size: 5vw;
        font-weight: 700;
        color: #e91e63;
        margin-bottom: 60px;
    }
    .linea-bottom{
        position: absolute;
        width: 60%;
        left: 0;
        background-color: #0e84aa;
        height: 4px;
        bottom: -10px;
        border-radius: 3px;
    }
    @media (max-width: 1024px) {
        h2{
        margin: 80px 0 80px 0;
        font-size: 2.5em;
        }
        .linea-bottom{
            bottom: -10px;
        }
    }

</style>