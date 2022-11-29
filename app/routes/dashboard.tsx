import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};


export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/login" });
};


export default function DashboardPage() {
  const data = useLoaderData();
  return (

    <>
      <Dash />
      {/* <p>  {data?.email}</p> */}
      <Form method="post">
        <div className="px-10">
          <button className="  w-full h-12 rounded-lg bg-PrimaryBlue-400 text-white mt-8 mb-8"  >Log Out</button>
        </div>
      </Form>
    </>
  );
}



const partners = [
  { id: "1", phone: '75991323232', name: 'Shannan Wills', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "2", phone: '75991323232', name: 'Darcie Marque', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "3", phone: '75991323232', name: 'Augustus Gran', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "4", phone: '75991323232', name: 'Camden Frankl', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "5", phone: '75991323232', name: 'Mia-Rose Joyn', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "6", phone: '75991323232', name: 'Marcus Massey', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "7", phone: '75991323232', name: 'Shannon Mcdan', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "8", phone: '75991323232', name: 'Manuel Thomso', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "9", phone: '75991323232', name: 'Garrett Pearc', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "10", phone: '75991323232', name: 'Jaspal Huerta', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "11", phone: '75991323232', name: 'Adrianna Bake', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "12", phone: '75991323232', name: 'Linzi Whittle', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "13", phone: '75991323232', name: 'Leanne Flemin', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "14", phone: '75991323232', name: 'Marisa Duarte', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "15", phone: '75991323232', name: 'Heather Glenn', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "16", phone: '75991323232', name: 'Lance Bautist', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "17", phone: '75991323232', name: 'Sheldon Squir', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "18", phone: '75991323232', name: 'Ffion Oconnel', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "19", phone: '75991323232', name: 'Victoria Math', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "20", phone: '75991323232', name: 'Evelina Reeve', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "21", phone: '75991323232', name: 'Ollie Carrill', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "22", phone: '75991323232', name: 'Kaiden Hussai', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "23", phone: '75991323232', name: 'Shanice Neale', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "24", phone: '75991323232', name: 'Rosemary Pain', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "25", phone: '75991323232', name: 'Jacqueline Ke', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "26", phone: '75991323232', name: 'Lillie-Mai Wa', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "27", phone: '75991323232', name: 'Margot Gonzal', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "28", phone: '75991323232', name: 'Henrietta Lov', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "29", phone: '75991323232', name: 'Billie Morton', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "30", phone: '75991323232', name: 'Nella Plummer', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "31", phone: '75991323232', name: 'Salma Watkins', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },
  { id: "32", phone: '75991323232', name: 'Leland Wheele', city: 'Salvador', feedback: false, hired: false, sentmessage: false, commission: false },

]

export function Dash() {
  const data = useActionData();
  return (
    <>

      <main className="max-w-md w-full">
        <section className="mt-8 mb-4">

          {/* <div className="px-10">
            <input className="max-w-md w-full border h-12 rounded-lg" type="text" name="" id="" />
          </div> */}
          <div className="px-10">
            <label className="relative block">
              <input
                className="w-full bg-white placeholder:font-italitc border border-slate-400 drop-shadow-md rounded-md py-2 pl-3 pr-10 focus:outline-none"
                placeholder="Enter your keyword to search" type="text" />

              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                  height="30" viewBox="0 0 30 30">
                  <path
                    d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
                  </path>
                </svg>
              </span>
            </label>
          </div>







        </section>
        <section className="">

          <h2 className="ml-8 mb-4">Nome</h2>
          <hr />
          <button title="Contact Sale" className="fixed z-90 bottom-10 right-8  w-14 h-14 rounded-full  flex justify-center items-center">
            <img src="images/AddButton.svg" alt="" />
          </button>
          <ul className="mt-4 mx-4">

            {partners.map((partner) => {
              return <li key={partner.id}>
                <div className="flex mt-4 items-center">
                  <div className="bg-purple-400 rounded-full h-10 w-10  ml-4"></div>
                  <div className="ml-6">{partner.name}</div>
                </div>
              </li>
            })}

          </ul>
        </section>
      </main>
      {/* <section className="w-full max-w-md px-4">
        <Form className="bg-white font-roboto font-bold  text-base text-gray-400  px-4  py-4 rounded-md  " method="post">
          <div>Item 1
2
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
      </section> */}
    </>)
}