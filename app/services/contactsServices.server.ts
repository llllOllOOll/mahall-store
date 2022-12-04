import {RequestCreateContact, contactCreateData, contactsData } from "~/models/contactsData.server"

export const getContacts = async (contact:string) => {
  if (contact === null) {
    contact = ''
  }
  return  await contactsData(contact)
}


export const createContact = (newContact:RequestCreateContact) => {
  return contactCreateData(newContact)
}