import { json, redirect } from "@remix-run/node";
import { useCatch } from "@remix-run/react";
import { z } from "zod";
import { zx } from "zodix";
import ContactsForm from "~/components/contacts/ContactForm"
import { BackArrowButton } from "~/components/navigation/BackArrow";
import { contactCreateData } from "~/models/contactsData.server";
import { errorAtPath } from "~/shared/utils";

export default function AddContactPage() {
  // const navigate = useNavigate()
  // function closeHandler() {
  //   navigate('..')
  // }
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

  // try {
  //   const schema = z.object({
  //     name: z.string(),
  //     phone:z.string(),
  //     password: z
  //       .string()
  //       .min(8, { message: "Password must be at least 8 characters" }),
  //   });


  //   const result = await zx.parseFormSafe(request, schema)
  //   if (!result.success) {
  //     return json({
  //       success: false,
  //       emailError: errorAtPath(result.error, "email"),
  //       passwordError: errorAtPath(result.error, "password"),
  //     })
  //   }
  // } catch (error) {
  //   return error
  // }

  await contactCreateData(contactsData)
  return redirect('/dashboard')
}



export function CatchBoundary() {
  const caught = useCatch()
  return <h1 className="text-PrimaryBlue-500">Caught error: {caught.statusText}</h1>
}