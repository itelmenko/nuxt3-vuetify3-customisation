export interface LoginData {
  email?: string
  password?: string
}

export interface LoginValidationErrors {
  email?: string[]
  password?: string[]
  common?: string
}

export interface SignUpData extends LoginData {
  password_confirmation?: string
}

export interface SignUpValidationErrors extends LoginValidationErrors {
  password_confirmation?: string[]
}
