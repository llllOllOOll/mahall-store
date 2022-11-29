import { Form, useActionData } from "@remix-run/react"

export function SignUp() {
  const data = useActionData();
  return (
    <>
      <section className="w-full max-w-md px-4">
        <Form className="bg-white font-roboto font-bold  text-base text-gray-400  px-4  py-4 rounded-md  " method="post">
          <div>

            <label className="block" htmlFor="email">
              Email {data?.message}
            </label>
            <input className="w-full border h-12 mt-1 mb-2 rounded-lg px-3 " type="email" name="email" id="email" required />
            {data?.emailError && <div>{data.emailError}</div>}
          </div>
          <div>
            <label className="block" htmlFor="password">
              Senha
            </label>
            <input className="w-full border h-12 mt-1 rounded-lg px-3" id="password" type="password" name="password" autoComplete="current-password"
              required
            />
            {data?.passwordError && <div>{data.passwordError}</div>}
          </div>
          <div>
            <button type="submit" className="w-full h-12 rounded-lg bg-PrimaryBlue-400 text-white mt-8 mb-8"  >Criar novo login</button>
          </div>
        </Form>
      </section>
    </>)
}