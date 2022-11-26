import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";




// app/routes/index.ts
/**
 * check the user to see if there is an active session, if not
 * redirect to login page
 *
 */
export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};


// app/routes/index.ts
/**
 *  handle the logout request
 *
 */
export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/login" });
};


export default function DashboardPage() {
  const data = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix Protected Dashboard</h1>
      <p>{data?.email}   {data?.password} {data?.role}</p>
      <Form method="post">
        <button>Log Out</button>
      </Form>
    </div>
  );
}