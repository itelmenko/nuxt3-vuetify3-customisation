import { defineStore } from 'pinia'
import { login, logout } from '@/api/login'
import type { LoginData } from '@/types/auth'

interface AuthState {
  login?: string
}

export const useAuth = defineStore('users', {
  state: (): AuthState => ({
    login: undefined,
  }),

  persist: true,

  actions: {
    async signIn(loginData: LoginData) {
      await login(loginData)
      this.login = loginData.email
    },

    async logout() {
      await logout()
      this.clear()
    },

    clear()
    {
      this.login = undefined
    }
  },

  getters: {
    isLoggedIn(): Boolean {
      return Boolean(this.login)
    },
  },
})
