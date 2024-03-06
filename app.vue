<template>
  <div>
    <NuxtLayout>
      <v-app>
        <NuxtPage />
      </v-app>
    </NuxtLayout>
  </div>
</template>

<script setup>
onBeforeMount(() => {
  // Перенос писания темы в конец секции head, чтобы не было конфликта с boostrap
  const vuetifyStyle = document.querySelector('head style#vuetify-theme-stylesheet');
  if (vuetifyStyle) {
    vuetifyStyle.parentNode.removeChild(vuetifyStyle);
    document.head.appendChild(vuetifyStyle);
  }
})
</script>
