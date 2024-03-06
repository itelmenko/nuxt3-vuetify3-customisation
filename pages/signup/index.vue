<template>
  <div id="signup" class="bg--scroll login-section division">
    <div class="container">
      <div class="row justify-content-center">
        <!-- REGISTER PAGE WRAPPER -->
        <div class="col-lg-11">
          <div class="register-page-wrapper r-16 bg--fixed">
            <div class="row">
              <!-- SIGN UP FORM -->
              <SectionsSignup2Form :errors="errors" @submit="handleSignUp"></SectionsSignup2Form>
              <!-- END SIGN UP FORM -->
              <!-- SIGN UP PAGE TEXT -->
              <div class="col-md-6">
                <div class="register-page-txt color--white">
                  <!-- Section ID -->
                  <span class="section-id">Start for free</span>
                  <!-- Title -->
                  <h2 class="s-48 w-700">Create</h2>
                  <h2 class="s-48 w-700">an account</h2>
                  <!-- Text -->
                  <p class="p-md mt-25">Integer congue sagittis and velna augue egestas magna suscipit purus aliquam</p>
                  <!-- Copyright -->
                  <div class="register-page-copyright">
                    <p class="p-sm">&copy; 2023 Martex. <span>All Rights Reserved</span></p>
                  </div>
                </div>
              </div>
              <!-- END SIGN UP PAGE TEXT -->
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
    import {onMounted, ref} from "vue";
    import type {SignUpData} from '@/types/auth'
    import type { ValidationErrors, ErrorResponce } from '@/types/api'
    import { prepareErrorToUI } from '@/api/helpers'
    import { signup } from '@/api/login'
    import { useAuth } from '@/stores/auth'

    definePageMeta({
        layout: "no-header-footer",
    })

    const authStore = useAuth()

    const errors = ref<ValidationErrors>({})

    async function handleSignUp(signUpData: SignUpData) {
      errors.value = {}

      try {
        await signup(signUpData)
        await navigateTo('/login')
      } catch (error) {
        errors.value = prepareErrorToUI(error as ErrorResponce)
      }
    }

    onMounted(async () => {
      if (authStore.isLoggedIn) {
        await navigateTo('/')
      }
    })
</script>
