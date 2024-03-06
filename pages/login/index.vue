<template>
  <div id="login" class="bg--scroll login-section division">
    <div class="container">
      <div class="row justify-content-center">
        <!-- REGISTER PAGE WRAPPER -->
        <div class="col-lg-11">
          <div class="register-page-wrapper r-16 bg--fixed">
            <div class="row">
              <!-- LOGIN PAGE TEXT -->
              <div class="col-md-6">
                <div class="register-page-txt color--white">
                  <!-- Logo -->
                  <img class="img-fluid" src="/assets/images/logo-white.png" alt="logo-image" />
                  <!-- Title -->
                  <h2 class="s-42 w-700">Welcome</h2>
                  <h2 class="s-42 w-700">back to Martex</h2>
                  <!-- Text -->
                  <p class="p-md mt-25">Integer congue sagittis and velna augue egestas magna suscipit purus aliquam</p>
                  <!-- Copyright -->
                  <div class="register-page-copyright">
                    <p class="p-sm">&copy; 2023 Martex. <span>All Rights Reserved</span></p>
                  </div>
                </div>
              </div>
              <!-- END LOGIN PAGE TEXT -->
              <SectionsLogin2Form :errors="errors" @submit="handleLogin"></SectionsLogin2Form>
            </div>
            <!-- End row -->
          </div>
          <!-- End register-page-wrapper -->
        </div>
        <!-- END REGISTER PAGE WRAPPER -->
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </div>
</template>


<script lang="ts" setup>
import {definePageMeta} from "#imports";

// eslint-disable-next-line object-curly-newline
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type {LoginData} from '@/types/auth'
import type { ValidationErrors, ErrorResponce } from '@/types/api'
import { prepareErrorToUI } from '@/api/helpers'
import { useAuth } from '@/stores/auth'

definePageMeta({
  layout: "no-header-footer",
})

const router = useRouter()
const authStore = useAuth()

const errors = ref<ValidationErrors>({})

async function handleLogin(loginData: LoginData) {
  errors.value = {}

  try {
    await authStore.signIn(loginData)
    //await router.push({ name: 'home' })
    await navigateTo('/')
  } catch (error) {
    errors.value = prepareErrorToUI(error as ErrorResponce)
  }
}

onMounted(async () => {
  if (authStore.isLoggedIn) {
    //router.push({ name: 'home' })
    await navigateTo('/')
  }
})
</script>
