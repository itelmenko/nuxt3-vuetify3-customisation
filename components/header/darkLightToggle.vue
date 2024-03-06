<template>
    <span class="dark-light-toggle" @click="toggleTheme">
        <img class="img-dark" src="/assets/images/icons/dark.svg" alt="dark" />
        <img class="img-dark-black" src="/assets/images/icons/dark-black.svg" alt="dark" />
        <img class="img-light" src="/assets/images/icons/light.svg" alt="dark" />
        <img class="img-light-black" src="/assets/images/icons/light-black.svg" alt="dark" />
    </span>
</template>
<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
    // Nuxt Template's theme
    document.body.classList.toggle("theme--dark");
    // Vuetify's theme
    theme.global.name.value = theme.global.current.value.dark ? 'custom-light' : 'custom-dark'
}
</script>
