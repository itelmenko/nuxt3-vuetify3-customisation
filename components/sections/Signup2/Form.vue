<template>
<div class="col-md-6">
  <div class="register-page-form">
    <form name="signupform" class="row sign-up-form generic-form" @submit.prevent="handleSubmit">
      <!-- Google Button -->
      <div class="col-md-12">
        <a href="#" class="btn btn-google ico-left"> <img src="/assets/images/png_icons/google.png" alt="google-icon" /> Sign up with Google </a>
      </div>
      <!-- Login Separator -->
      <div class="col-md-12 text-center">
        <div class="separator-line">Or, sign up with your email</div>
      </div>
      <!-- Form Input -->
      <div class="col-md-12">
        <p class="p-sm input-header">Email address</p>
        <v-text-field v-model="login" placeholder="example@example.com" :error-messages="errors.email ?? errors.common ?? null"></v-text-field>
      </div>
      <!-- Form Input -->
      <div class="col-md-12">
        <p class="p-sm input-header">Password</p>
        <v-text-field
            v-model="password"
            :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
            placeholder="* * * * * * * * *"
            @click:append-inner="isPasswordVisible = !isPasswordVisible"
            :type="isPasswordVisible ? 'text' : 'password'" :error-messages="errors.password">
        </v-text-field>
      </div>
      <!-- Form Input -->
      <div class="col-md-12">
        <p class="p-sm input-header">Password confirmation</p>
        <v-text-field
            v-model="passwordConfirmation"
            :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
            placeholder="* * * * * * * * *"
            @click:append-inner="isPasswordVisible = !isPasswordVisible"
            :type="isPasswordVisible ? 'text' : 'password'" :error-messages="errors.password_confirmation">
        </v-text-field>
      </div>
      <!-- Checkbox -->
      <div class="col-md-12">
        <div class="form-data">
          <span>By clicking “Create Account”, you agree to our <NuxtLink to="/terms">Terms</NuxtLink> and that you have read our
              <NuxtLink to="/privacy"> Privacy Policy</NuxtLink>
          </span>
        </div>
      </div>
      <!-- Form Submit Button -->
      <div class="col-md-12">
        <button type="submit" class="btn btn--theme hover--theme submit">Create Account</button>
      </div>
      <!-- Log In Link -->
      <div class="col-md-12">
        <p class="create-account text-center">Already have an account? <a href="/login" class="color--theme">Log in</a></p>
      </div>
    </form>
  </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { SignUpData } from '@/types/auth'
import type { SignUpValidationErrors } from '@/types/auth'

defineProps<{
  errors: SignUpValidationErrors
}>()

const emit = defineEmits<{
  (event: 'submit', payload: SignUpData): void
}>()

const login = ref('')
const password = ref('')
const passwordConfirmation = ref('')
const isPasswordVisible = ref(false)

async function handleSubmit() {
  const loginData: SignUpData = {
    email: login.value,
    password: password.value,
    password_confirmation: passwordConfirmation.value
  }

  emit('submit', loginData)
}
</script>


