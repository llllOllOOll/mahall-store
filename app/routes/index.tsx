import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";
import { authenticator } from "~/services/auth.server";
import { db } from "~/services/db.server";

export default function HomePage() {
  const data = useLoaderData()
  return (
    <>
      <h1 className="text-blue-300">Welcome to Mahall Storre</h1>
      <Link to="/login">Login</Link>
      <p>{JSON.stringify(data)}</p>
    </>
  )

}

// export async function loader({ request }: LoaderArgs) {
//   return await authenticator.isAuthenticated(request, {
//     successRedirect: "/dashboard",
//     failureRedirect: "/login",
//   });
// }

export async function loader() {
  const data = {
    users: await db.user.findMany(),
  }
  return json(data)
}