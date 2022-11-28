import { LoaderArgs } from "@remix-run/node";
import { Link } from "react-router-dom";
import { authenticator } from "~/services/auth.server";

export default function HomePage() {
  return (
    <>
      <h1 className="text-blue-300">Welcome to Mahall Storre</h1>
      <Link to="/login">Login</Link>
    </>
  )

}

export async function loader({ request }: LoaderArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
}