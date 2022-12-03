import { Form, Link } from "@remix-run/react";

export default function ContactsForm() {
  return (
    <>
      <main className=" max-w-md w-full bg-white flex   justify-start items-center flex-col">
        <section className="flex w-full max-w-sm flex-col items-center px-4">
          <div className="mt-4  mb-4 flex justify-center items-center">
            <img src="images/user_icon.svg" alt="" />
          </div>
          <div className="relative">
            <div>
              <hr className="h-px w-80 bg-gray-200 my-4" />
            </div>
            <div className="flex w-full justify-around absolute inset-0">
              <img className="h-8" src="images/message.svg" alt="" />
              <img className="h-8" src="images/feedback.svg" alt="" />
              <img className="h-8" src="images/hired.svg" alt="" />
              <img className="h-8" src="images/comission.svg" alt="" />
            </div>
          </div>
        </section>

        <section className="w-full max-w-md px-4">
          <Form className="bg-white font-roboto font-bold  text-base text-gray-400  px-4  py-4 rounded-md  " method="post">
            <div>
              <label className="block" htmlFor="name">
                Nome
              </label>
              <input className="w-full border h-12 mt-1 mb-2 rounded-lg px-3 " type="text" name="name" id="name" required />
            </div>
            <div>
              <label className="block" htmlFor="phone">
                Telefone
              </label>
              <input className="w-full border h-12 mt-1 rounded-lg px-3" id="phone" type="text" name="phone" autoComplete="current-password"
                required
              />
            </div>
            <div>
              <label className="block" htmlFor="city">
                Cidade
              </label>
              <input className="w-full border h-12 mt-1 rounded-lg px-3" id="city" type="text" name="city" autoComplete="current-password"
                required
              />
            </div>
            <div>
              <button className="w-full h-12 rounded-lg bg-PrimaryBlue-500 text-white mt-8" >Salvar</button>
            </div>
          </Form>
        </section>
      </main>
    </>
  )
}