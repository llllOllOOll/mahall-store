import { db } from "~/infra/db.server"

export const contactsData = async (name: string) => {
  return await db.contact.findMany({
    where: {
      name: {
        startsWith: name,
        mode: 'insensitive',
      }
    }
  })
}

export const contactByIdData = async (id: string) => {
  return await db.contact.findFirst({
    where: {
      id
    }
  })
}

export const contactData = async (name: string) => {
  return await db.contact.findUnique({
    where: {
      name
    }
  })
}


export type RequestCreateContact = {
  name: string
  phone: string
  city: string
}
export const contactCreateData = async (contact: RequestCreateContact) => {
  return await db.contact.create({
    data: { ...contact }
  })
}

export async function updateContactData(id, contactData) {
  await db.contact.update({
    where: { id },
    data: {
      name: contactData.name,
      phone: contactData.phone,
      city: contactData.city,
    }
  })
}
