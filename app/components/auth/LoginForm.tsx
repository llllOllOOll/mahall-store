import { Form, Link } from "@remix-run/react";

export function LoginForm() {
  return (
    <main className=" max-w-md w-full bg-white flex   justify-start items-center flex-col">
      <section>
        <div className="mt-4  mb-4 flex justify-center items-center">
          <img src="images/user_icon.svg" alt="" />
        </div>
      </section>

      <section className="w-full max-w-md px-4">
        <Form className="bg-white font-roboto font-bold  text-base text-gray-400  px-4  py-4 rounded-md  " method="post">
          <div>
            <label className="block" htmlFor="email">
              Login
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
            <button className="w-full h-12 rounded-lg bg-PrimaryBlue-500 text-white mt-8" >Acessar</button>
          </div>
          <div className="w-full h-12 rounded-lg bg-PrimaryBlue-400 text-white mt-8 mb-8  flex justify-center items-center" >
            <Link to="/signup" >Criar novo login</Link>
          </div>
          <p className="text-center" >Esqueci minha senha</p>
        </Form>
      </section>
    </main>
  )
}