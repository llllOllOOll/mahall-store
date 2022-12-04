import { db } from "~/infra/db.server"

export const contactData = async (name:string) => {
  return await db.contact.findUnique({
    where:{
     name 
    }
  })
}


export type RequestCreateContact = {
  name: string
  phone:string
  city: string
}
export const contactCreateData = async (contact:RequestCreateContact) => {
  return await db.contact.create({
    data:{...contact}
  })
}