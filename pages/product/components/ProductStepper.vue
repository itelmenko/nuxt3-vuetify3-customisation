<template>
  <v-stepper :non-linear="true" :items="['Model', 'Size', 'Speed', 'Term']">
    <template v-slot:item.1>
      <v-card title="Model" flat>...</v-card>
    </template>

    <template v-slot:item.2>
      <v-card title="Size" flat>...</v-card>
    </template>

    <template v-slot:item.3>
      <v-card title="Speed" flat>...</v-card>
    </template>

    <template v-slot:item.4>
      <v-card title="Term" flat>...</v-card>
    </template>
  </v-stepper>
</template>
<script lang="ts" setup>
</script>
