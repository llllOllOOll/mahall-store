// app/routes/login.tsx
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { Layout } from "~/components/layout/Layout";
import { authenticator } from "~/services/auth.server";
import { sessionStorage } from "~/services/session.server";

export default function Login() {
  return (
    <>
      <div className="sticky top-0 z-30 max-w-md w-full min-h-screen ">
        <header className="max-w-md  w-full h-14  text-PrimaryBlue-500 bg-gray-100 font-roboto font-bold text-2xl flex justify-center items-center">
          <div>
            <img className="absolute inset-0 mt-2 ml-4 hidden" src="images/ButtonArrow.svg" alt="" />
          </div>
          <div>Mahall Store</div>
        </header>

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
      </div>
    </>
  );
}

// Second, we need to export an action function, here we will use the
// `authenticator.authenticate method`
export async function action({ request }: ActionArgs) {
  // we call the method with the name of the strategy we want to use and the
  // request object, optionally we pass an object with the URLs we want the user
  // to be redirected to after a success or a failure
  const res = await authenticator.authenticate("form", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
  console.log(res)
  return res
};

// Finally, we can export a loader function where we check if the user is
// authenticated with `authenticator.isAuthenticated` and redirect to the
// dashboard if it is or return null if it's not
export async function loader({ request }: LoaderArgs) {
  await authenticator.isAuthenticated(request, { successRedirect: "/dashboard" });
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  console.log("Session:", session.get(authenticator.sessionErrorKey))
  // If the user is already authenticated redirect to /dashboard directly
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard",
  });


};

