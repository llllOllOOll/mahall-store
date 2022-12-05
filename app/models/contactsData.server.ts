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


// export type RequestCreateContact = {
//   name: string
//   phone: string
//   city: string
//
// }
export const contactCreateData = async (contact) => {
  contact.sentmessage = contact.sentmessage === 'true'
  contact.feedback = contact.feedback === 'true'
  contact.hired = contact.hired === 'true'
  contact.commission = contact.commission === 'true'
  return await db.contact.create({
    data: { ...contact }
  })
}

export async function updateContactData(id, contactData) {
  console.log('contactData: ', contactData.sentmessage)

  const sentmessage = contactData.sentmessage === 'true'
  const feedback = contactData.feedback === 'true'
  const hired = contactData.hired === 'true'
  const commission = contactData.commission === 'true'
  console.log('sentmessage: ', sentmessage)
  await db.contact.update({
    where: { id },
    data: {
      name: contactData.name,
      phone: contactData.phone,
      city: contactData.city,
      sentmessage,
      feedback,
      hired,
      commission,
    }
  })
}
