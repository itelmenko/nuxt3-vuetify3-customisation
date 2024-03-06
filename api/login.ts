import axios from '@/libs/axios'
import type { LoginData, SignUpData } from '@/types/auth'

export async function login(loginData: LoginData) {
  await axios.get('/api/sanctum/csrf-cookie')
  await axios.post('/api/login', loginData)
}

export async function logout() {
  await axios.post('/api/logout')
}

export async function signup(loginData: SignUpData) {
  await axios.post('/api/register', loginData)
}
