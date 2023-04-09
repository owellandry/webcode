import { defineStore } from "pinia"
import { ref } from 'vue'

export const useThemeMode = defineStore('themeMode', () => {

    const stateTheme = ref("light")
    
    function changeMode(state) {
      stateTheme.value = state
    }
  
    return { stateTheme, changeMode }
  })