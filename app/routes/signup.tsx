import { ActionArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { register } from "~/services/user.server";

export default function SignUp() {
  return (
    <section className="w-full max-w-md px-4">
      <Form className="bg-white font-roboto font-bold  text-base text-gray-400  px-4  py-4 rounded-md  " method="post">
        <div>
          <label className="block" htmlFor="email">
            Email
          </label>
          <input className="w-full border h-12 mt-1 mb-2 rounded-lg px-3 " type="email" name="email" id="email" required />
        </div>
        <div>
          <label className="block" htmlFor="password">
            Senha
          </label>
          <input className="w-full border h-12 mt-1 rounded-lg px-3" id="password" type="password" name="password" autoComplete="current-password"
            required
          />
        </div>
        <div>
          <button type="submit" className="w-full h-12 rounded-lg bg-PrimaryBlue-400 text-white mt-8 mb-8"  >Criar novo login</button>
        </div>
      </Form>
    </section>
  )
}

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")

  const user = await register({ email, password })
  if (!user) {
    throw new Error("Error on create new user")
  }

  return redirect("/login")
}