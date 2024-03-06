export interface ValidationErrors {
  [key: string]: string[] | string
}

export interface ErrorResponce {
  response?: {
    data?: {
      message?: string
      errors?: ValidationErrors
    }
  }
}
