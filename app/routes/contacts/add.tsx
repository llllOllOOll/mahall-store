import { redirect } from "@remix-run/node";
import { useCatch } from "@remix-run/react";
import ContactsForm from "~/components/contacts/ContactForm"
import { BackArrowButton } from "~/components/navigation/BackArrow";
import { contactCreateData } from "~/models/contactsData.server";

export default function AddContactPage() {
  return (
    <>
      <BackArrowButton />
      <ContactsForm />
    </>
  )
}

export async function action({ request }) {
  const formData = await request.formData()
  const contactsData = Object.fromEntries(formData)

  await contactCreateData(contactsData)
  return redirect('/dashboard')
}

export function CatchBoundary() {
  const caught = useCatch()
  return <h1 className="text-PrimaryBlue-500">Caught error: {caught.statusText}</h1>
}
