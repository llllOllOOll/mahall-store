import { Form, Link, useLoaderData, useMatches } from "@remix-run/react";
import { useState } from "react";

export default function ContactsForm() {
  const contact = useLoaderData()
  const matches = useMatches()


  const defaultValues = contact
    ? {
      name: contact.name,
      phone: contact.phone,
      city: contact.city,
    } : {

      name: '',
      phone: '',
      city: '',
    }

  const [isActiveMessage, setIsActiveMessage] = useState(false)
  const handleClickMessage = event => {
    setIsActiveMessage(current => !current)
    console.log(isActiveMessage)
  }


  const [isActiveFeedBack, setIsActiveFeedBack] = useState(false)
  const handleClickFeedBack = event => {
    setIsActiveFeedBack(current => !current)
    console.log(isActiveFeedBack)
  }

  const [isActiveHired, setIsActiveHired] = useState(false)
  const handleClickHired = event => {
    setIsActiveHired(current => !current)
    console.log(isActiveHired)
  }

  const [isActiveCommission, setIsActiveCommission] = useState(false)
  const handleClickCommission = event => {
    setIsActiveCommission(current => !current)
    console.log(isActiveCommission)
  }


  return (
    <>
      <main className=" max-w-md w-full bg-white flex   justify-start items-center flex-col">
        <section className="flex w-full max-w-sm flex-col items-center px-4">
          <div className="mt-4  mb-4 flex justify-center items-center">
            <img src="../images/user_icon.svg" alt="" />
          </div>
          <div className="relative">
            <div>
              <hr className="h-px w-80 bg-gray-200 my-4" />
            </div>
            <div className="flex w-full justify-around absolute inset-0">
              <button className={isActiveMessage ? 'border-gray-400' : ''} onClick={handleClickMessage}>
                {isActiveMessage ?

                  <img className="h-8" src=" ../images/message-blue.svg" alt="" />
                  :
                  <img className="h-8" src=" ../images/message.svg" alt="" />

                }


              </button>

              <button onClick={handleClickFeedBack}>
                {isActiveFeedBack ?

                  <img className="h-8" src=" ../images/feedback-blue.svg" alt="" />
                  :
                  <img className="h-8" src=" ../images/feedback.svg" alt="" />

                }

              </button>
              <button onClick={handleClickHired}>
                {isActiveHired ?

                  <img className="h-8" src=" ../images/hired-blue.svg" alt="" />
                  :
                  <img className="h-8" src=" ../images/hired.svg" alt="" />

                }


              </button>
              <button onClick={handleClickCommission}>
                {isActiveCommission ?

                  <img className="h-8" src=" ../images/commission-blue.svg" alt="" />
                  :
                  <img className="h-8" src=" ../images/commission.svg" alt="" />

                }


              </button>
            </div>
          </div>
        </section>

        <section className="w-full max-w-md px-4">
          <Form className="bg-white font-roboto font-bold  text-base text-gray-400  px-4  py-4 rounded-md  " method="post">
            <div>
              <label className="block" htmlFor="name">
                Nome
              </label>
              <input defaultValue={defaultValues.name} className="w-full border h-12 mt-1 mb-2 rounded-lg px-3 " type="text" name="name" id="name" required />
            </div>
            <div>
              <label className="block" htmlFor="phone">
                Telefone
              </label>
              <input defaultValue={defaultValues.phone} className="w-full border h-12 mt-1 rounded-lg px-3" id="phone" type="text" name="phone" autoComplete="current-password"
                required
              />
            </div>
            <div>
              <label className="block" htmlFor="city">
                Cidade
              </label>
              <input defaultValue={defaultValues.city} className="w-full border h-12 mt-1 rounded-lg px-3" id="city" type="text" name="city" autoComplete="current-password"
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
