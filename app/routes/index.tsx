import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Link } from "react-router-dom";
import { authenticator } from "~/services/auth.server";
import { sessionStorage } from "~/services/session.server";

export default function HomePage() {
  return (
    <>
      <h1 className="text-blue-300">Welcome to Mahall Storre</h1>
      <Link to="/login">Login</Link>
    </>
  )

}

// Finally, we can export a loader function where we check if the user is
// authenticated with `authenticator.isAuthenticated` and redirect to the
// dashboard if it is or return null if it's not
export async function loader({ request }: LoaderArgs) {
  await authenticator.isAuthenticated(request, { successRedirect: "/dashboard" });
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  // If the user is already authenticated redirect to /dashboard directly
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
}