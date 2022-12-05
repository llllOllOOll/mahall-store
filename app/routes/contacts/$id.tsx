import { redirect } from "@remix-run/node"
import ContactsForm from "~/components/contacts/ContactForm"
import { getContactById, updateContact } from "~/services/contactsServices.server"
export default function UpdateContactPage() {
  return (
    <ContactsForm />
  )
}

export async function loader({ params }) {
  const contactId = params.id
  return await getContactById(contactId)
}

export async function action({ params, request }) {
  const contactId = params.id
  const formData = await request.formData()
  const contact = Object.fromEntries(formData)
  console.log(contact)
  await updateContact(contactId, contact)
  return redirect('/dashboard')
}
