import { useTransition as useNavigation, Form, Link, useLoaderData, useMatches } from "@remix-run/react";
import { useState } from "react";


export default function ContactsForm() {
  const contact = useLoaderData()

  const navigation = useNavigation()
  const isSubmitting = navigation.state !== 'idle'

  // if (!contact) {
  //   contact.sentmessage = false
  //   contact.feedback = false
  //   contact.hired = false
  //   contact.commission = false
  // }

  const defaultValues = contact
    ? {
      name: contact.name,
      phone: contact.phone,
      city: contact.city,
      sentmessage: contact.sentmessage,
      feedback: contact.feedback,
      hired: contact.hired,
      commission: contact.commission,
    } : {
      name: '',
      phone: '',
      city: '',
      sentmessage: false,
      feedback: false,
      hired: false,
      commission: false,
    }

  // useEffect(() => {
  //   setIsActiveMessage(!!contact.sentmessage)
  //
  // }, [])


  const [isActiveMessage, setIsActiveMessage] = useState(contact?.sentmessage ? 'undefined' : false)


  const handleClickMessage = event => {
    setIsActiveMessage(current => !current)
    console.log(isActiveMessage)
  }


  const [isActiveFeedBack, setIsActiveFeedBack] = useState(contact?.feedback ? 'undefined' : false)
  const handleClickFeedBack = event => {
    setIsActiveFeedBack(current => !current)
  }

  const [isActiveHired, setIsActiveHired] = useState(contact?.hired ? 'undefined' : false)
  const handleClickHired = event => {
    setIsActiveHired(current => !current)
  }

  const [isActiveCommission, setIsActiveCommission] = useState(contact?.commission ? 'undefined' : false)
  const handleClickCommission = event => {
    setIsActiveCommission(current => !current)
  }


  console.log(contact)
  console.log(isActiveMessage)
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
              <button onClick={handleClickMessage}>
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
              <button disabled={isSubmitting} className="w-full h-12 rounded-lg bg-PrimaryBlue-500 text-white mt-8" >
                {isSubmitting ? 'Salvando...' : 'Salvar Contato'}
              </button>
            </div>

            <input type="hidden" name="sentmessage" value={isActiveMessage.toString()} />
            <input type="hidden" name="feedback" value={isActiveFeedBack.toString()} />
            <input type="hidden" name="hired" value={isActiveHired.toString()} />
            <input type="hidden" name="commission" value={isActiveCommission.toString()} />
          </Form>
        </section>
      </main>
    </>
  )
}
