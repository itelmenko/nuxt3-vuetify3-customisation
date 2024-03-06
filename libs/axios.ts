'use strict'

import axios from 'axios'
import { useAuth } from '@/stores/auth'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  timeout: 60 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response
  },
  async function (error) {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 419)
    ) {
      const authStore = useAuth()
      await authStore.clear()
      await navigateTo('/login')
    }

    if (error.response && error.response.status === 403) {
      window.location.href = '/forbidden'
    }

    // Do something with response error
    return Promise.reject(error)
  },
)

export default _axios
