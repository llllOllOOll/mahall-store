import { userCreateData, userData } from "~/models/usersData.server"

export const getUsers = () => {
  
}

export const getUser = (email:string) => {
  return userData(email)
}

type RequestCreateUser = {
  email:string
  password:string
  name:string
  role:string 
}

export const createUser = (newUser:RequestCreateUser) => {
  return userCreateData(newUser)
}