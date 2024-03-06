<template>
  <div>
    <section class="rel inner-page-hero division">
      <div class="container">
        <div class="justify-content-center">
          <h2 class="s-52 w-700 mb-30">Products</h2>
          <product-stepper></product-stepper>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProductStepper from "./components/ProductStepper.vue";

useHead({
  bodyAttrs: {
    class: "navbar-dark"
  },
})
</script>
