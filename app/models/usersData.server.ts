import { db } from "~/infra/db.server"

export const userData = async (email:string) => {
  return await db.user.findUnique({
    where:{
      email
    }
  })
}

type RequestCreateUser = {
  email:string
  password:string
  name:string
  role:string 
}

export const userCreateData = async (user:RequestCreateUser) => {
  return await db.user.create({
    data:{...user}
  })
}
