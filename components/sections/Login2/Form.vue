<template>
  <div class="col-md-6">
    <div class="register-page-form">
      <form name="signinform" class="row sign-in-form generic-form" @submit.prevent="handleSubmit">
        <!-- Google Button -->
        <div class="col-md-12">
          <a href="#" class="btn btn-google ico-left"> <img src="/assets/images/png_icons/google.png" alt="google-icon" /> Sign in with Google </a>
        </div>
        <!-- Login Separator -->
        <div class="col-md-12 text-center">
          <div class="separator-line">Or, sign in with your email</div>
        </div>
        <!-- Form Input -->
        <div class="col-md-12 form-row">
          <p class="p-sm input-header">Email address</p>
          <v-text-field v-model="login" placeholder="example@example.com" :error-messages="errors.email ?? errors.common ?? null"></v-text-field>
        </div>
        <!-- Form Input -->
        <div class="col-md-12 form-row">
          <p class="p-sm input-header">Password</p>
          <v-text-field
              v-model="password"
              :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
              placeholder="* * * * * * * * *"
              @click:append-inner="isPasswordVisible = !isPasswordVisible"
              :type="isPasswordVisible ? 'text' : 'password'" :error-messages="errors.password">
          </v-text-field>
        </div>
        <!-- Reset Password Link -->
        <div class="col-md-12 form-row">
          <div class="reset-password-link">
            <p class="p-sm"><NuxtLink to="/reset-password" class="color--theme">Forgot your password?</NuxtLink></p>
          </div>
        </div>
        <!-- Form Submit Button -->
        <div class="col-md-12">
          <button type="submit" class="btn btn--theme hover--theme submit">Log In</button>
        </div>
        <!-- Sign Up Link -->
        <div class="col-md-12">
          <p class="create-account text-center">Don't have an account? <NuxtLink to="/signup" class="color--theme">Sign up</NuxtLink></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { LoginData } from '@/types/auth'
import type { LoginValidationErrors } from '@/types/auth'

defineProps<{
  errors: LoginValidationErrors
}>()

const emit = defineEmits<{
  (event: 'submit', payload: LoginData): void
}>()

const login = ref('')
const password = ref('')
const isPasswordVisible = ref(false)

async function handleSubmit() {
  const loginData: LoginData = {
    email: login.value,
    password: password.value,
  }

  emit('submit', loginData)
}
</script>

