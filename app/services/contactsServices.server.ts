import { RequestCreateContact, contactCreateData, contactsData, contactByIdData, updateContactData } from "~/models/contactsData.server"

export const getContactById = async (id: string) => {
  return await contactByIdData(id)
}

export const getContacts = async (contact: string) => {
  if (contact === null) {
    contact = ''
  }
  return await contactsData(contact)
}


export const createContact = (newContact: RequestCreateContact) => {
  return contactCreateData(newContact)
}

export const updateContact = async (id, data) => {
  await updateContactData(id, data)
}
