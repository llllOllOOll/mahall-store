import { redirect } from "@remix-run/node"
import ContactsForm from "~/components/contacts/ContactForm"
import { BackArrowButton } from "~/components/navigation/BackArrow"
import { getContactById, updateContact } from "~/services/contactsServices.server"
export default function UpdateContactPage() {
  return (
    <>
      <BackArrowButton />
      <ContactsForm />
    </>
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
  await updateContact(contactId, contact)
  return redirect('/dashboard')
}
