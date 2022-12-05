import { ActionFunction, json, LoaderFunction } from "@remix-run/node";
import { Form, Link, useActionData, useFetcher, useLoaderData } from "@remix-run/react";
import { useEffect, useRef } from "react";
import invariant from "tiny-invariant";
import { authenticator } from "~/services/auth.server";
import { getContacts } from "~/services/contactsServices.server";

export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/login" });
};

export default function Dash() {

  const partnersFetcher = useFetcher<typeof loader>()
  const partners = partnersFetcher.data?.customers ?? []

  useEffect(() => {
    console.log("Inside useEffecs")
    partnersFetcher.load(`/dashboard?=l`)
  }, [])
  return (
    <>

      <main className="max-w-md w-full">
        <section className="mt-8 mb-4">

          <div className="px-10 ">
            <Form method="get"

              onInput={(e) => {
                const { id, name, value } = e.target;

                partnersFetcher.submit(
                  { query: value ?? '' },
                  { method: 'get', action: '/dashboard' }
                )
                console.log('onInput', value, name)
                // Perform validation here!

                e.stopPropagation()
              }}
            >
              <UncontrolledInput id='name' label='Nome' value={partners.name} />
            </Form>
          </div>

        </section>
        <section className="">

          <hr />
          <button title="Contact Sale" className="fixed z-90 bottom-10 right-8  w-14 h-14 rounded-full  flex justify-center items-center">
            <Link to='/contacts/add' >
              <img src="images/AddButton.svg" alt="" />
            </Link>
          </button>
          <ul className="mt-4 mx-4">

            {partners.map((partner) => {
              return <li key={partner.id}>
                <Link to={'/contacts/' + partner.id}>
                  <div className="flex mt-4 items-center">
                    <div className="bg-purple-400 rounded-full h-10 w-10  ml-4"></div>
                    <div className="ml-6">{partner.name}</div>
                  </div>
                </Link>
              </li>
            })}

          </ul>
        </section>
      </main>
      <Form method="post">
        <div className="px-10">
          <button className="  w-full h-12 rounded-lg bg-PrimaryBlue-400 text-white mt-8 mb-8"  >Log Out</button>
        </div>
      </Form>

    </>)
}

const UncontrolledInput = ({
  id, label, value = '', type = 'text',
}) => {
  const input = useRef();

  useEffect(() => {
    input.current.value = value
  }, [value])


  return (
    <>
      <div className=" relative block">
        <label className="" htmlFor="">
          {label}
        </label>
        <input
          className="w-full bg-white placeholder:font-italitc border border-slate-400 drop-shadow-md rounded-md py-2 pl-3 pr-10 focus:outline-none"
          placeholder="Enter your keyword to search"
          ref={input}
          id={id}
          type="text" name={id} />

        <span className="absolute inset-y-0 right-0 flex  justify-items-center items-center pr-3 mt-6">
          <svg className="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
            height="30" viewBox="0 0 30 30">
            <path
              d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
            </path>
          </svg>
        </span>
      </div>
    </>
  )
}

export async function searchCustomers(customer: string) {
  return await getContacts(customer)
  // if (customer === '') {
  //   const restult = partnersLimit.filter(c => c.name.startsWith(customer)).map((customer) => {
  //     return { ...customer }
  //   })
  //   return restult
  // }

  // const restult = partners.filter(c => c.name.startsWith(customer)).map((customer) => {
  //   return { ...customer }
  // })
  // return restult
}


export let loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  const url = new URL(request.url)
  const query = url.searchParams.get('query')
  //invariant(typeof query === 'string', 'query is required')
  return json(
    { customers: await searchCustomers(query) }
  )
};

