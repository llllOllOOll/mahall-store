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
              <UncontrolledInput id='name' label='Name' value={partners.name} />
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


  console.log('Input:', id, value)
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

        <span className="absolute inset-y-0 right-0 flex  justify-items-center items-center pr-3 mt-4">
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



const partnersLimit = [
  { id: 1, name: 'Mary ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 2, name: 'Betty ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 3, name: 'Barbara ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 4, name: 'Shirley', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 5, name: 'Patricia', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 6, name: 'Dorothy ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 7, name: 'Joan ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 8, name: 'Margaret ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 9, name: 'Nancy ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 10, name: 'Helen ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 11, name: 'Carol ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 12, name: 'Joyce ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 13, name: 'Doris', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 14, name: 'Ruth ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 15, name: 'Virginia', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 16, name: 'Marilyn ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 17, name: 'Elizabeth ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 18, name: 'Jean', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 19, name: 'Frances', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 20, name: 'Beverly ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 21, name: 'Lois ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 22, name: 'Alice ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 23, name: 'Donna ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 24, name: 'Martha', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 25, name: 'Dolores', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 26, name: 'Janet', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 27, name: 'Phyllis', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 28, name: 'Norma', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 29, name: 'Carolyn ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 30, name: 'Evelyn ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
]

const partners = [
  { id: 1, name: 'Mary ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 2, name: 'Betty ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 3, name: 'Barbara ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 4, name: 'Shirley', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 5, name: 'Patricia', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 6, name: 'Dorothy ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 7, name: 'Joan ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 8, name: 'Margaret ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 9, name: 'Nancy ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 10, name: 'Helen ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 11, name: 'Carol ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 12, name: 'Joyce ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 13, name: 'Doris', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 14, name: 'Ruth ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 15, name: 'Virginia', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 16, name: 'Marilyn ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 17, name: 'Elizabeth ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 18, name: 'Jean', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 19, name: 'Frances', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 20, name: 'Beverly ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 21, name: 'Lois ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 22, name: 'Alice ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 23, name: 'Donna ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 24, name: 'Martha', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 25, name: 'Dolores', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 26, name: 'Janet', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 27, name: 'Phyllis', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 28, name: 'Norma', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 29, name: 'Carolyn ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 30, name: 'Evelyn ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 31, name: 'Gloria', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 32, name: 'Anna ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 33, name: 'Marie ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 34, name: 'Ann', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 35, name: 'Mildred ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 36, name: 'Rose ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 37, name: 'Peggy', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 38, name: 'Geraldine', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 39, name: 'Catherine ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 40, name: 'Judith ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 41, name: 'Louise ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 42, name: 'Janice ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 43, name: 'Marjorie ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 44, name: 'Annie ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 45, name: 'Ruby ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 46, name: 'Eleanor ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 47, name: 'Jane ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 48, name: 'Sandra ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 49, name: 'Irene', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 50, name: 'Wanda ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 51, name: 'Elaine ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 52, name: 'June ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 53, name: 'Joanne ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 54, name: 'Rita', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 55, name: 'Florence ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 56, name: 'Delores', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 57, name: 'Lillian ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 58, name: 'Marlene', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 59, name: 'Edna', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 60, name: 'Sarah ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 61, name: 'Patsy ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 62, name: 'Lorraine ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 63, name: 'Thelma ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 64, name: 'Josephine ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 65, name: 'Juanita', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 66, name: 'Bonnie ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 67, name: 'Arlene', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 68, name: 'Gladys ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 69, name: 'Joann', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 70, name: 'Sally', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 71, name: 'Charlotte ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 72, name: 'Kathleen ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 73, name: 'Audrey ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 74, name: 'Pauline', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 75, name: 'Wilma ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 76, name: 'Sylvia', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 77, name: 'Theresa ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 78, name: 'Jacqueline ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 79, name: 'Clara ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 80, name: 'Ethel ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 81, name: 'Loretta ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 82, name: 'Grace ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 83, name: 'Sharon ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 84, name: 'Edith ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 85, name: 'Lucille', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 86, name: 'Emma ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 87, name: 'Bernice', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 88, name: 'Marion', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 89, name: 'Linda', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 90, name: 'Jo', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 91, name: 'Anne ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 92, name: 'Hazel ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 93, name: 'Roberta', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 94, name: 'Carole ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 95, name: 'Darlene ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 96, name: 'Esther ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 97, name: 'Katherine ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 98, name: 'Ellen ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 99, name: 'Laura ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
  { id: 100, name: 'Julia ', phone: '71992324545', feedback: false, hired: false, commission: false, sentmessage: false },
]
