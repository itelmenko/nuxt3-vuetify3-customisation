import type { ErrorResponce } from '@/types/api'
import type { ValidationErrors } from '@/types/api'

/**
 * Преобразование ответа сервера в ошибки отображаемые формой
 */
export function prepareErrorToUI(error: ErrorResponce) {
  let result = {} as ValidationErrors

  result.common = 'Internal error'

  if (error.response?.data?.message) {
    result.common = error.response.data.message
  }

  if (error.response?.data?.errors) {
    result = error.response.data.errors
  }

  return result
}
