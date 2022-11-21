export interface User {
  id: number,
  login: string,
  name: string,
  password?: string,
  role: string
}

export interface UserFoLocalStorage {
  id: number,
  login: string,
  name: string,
  role: string
}

export interface Modal {
  type: string,
  code: number,
  message: string,
}

export interface UserLogInRequest {
  login: string,
  password: string
}
