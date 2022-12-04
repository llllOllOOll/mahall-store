import {RequestCreateContact, contactCreateData } from "~/models/contactsData.server"

export const getContacts = () => {
  
}

// export const getContact = (contact:string) => {
//   return contactData(contact)
// }


export const createContact = (newContact:RequestCreateContact) => {
  return contactCreateData(newContact)
}