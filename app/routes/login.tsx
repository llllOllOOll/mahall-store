import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { LoginForm } from "~/components/auth/LoginForm";
import { Layout } from "~/components/layout/Layout";
import { authenticator } from "~/services/auth.server";
import { sessionStorage } from "~/services/session.server";

export default function Login() {
  return (
    <Layout>
      <LoginForm />
    </Layout>

  );
}

export async function action({ request }: ActionArgs) {
  return await authenticator.authenticate("form", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
};

export async function loader({ request }: LoaderArgs) {
  await authenticator.isAuthenticated(request, { successRedirect: "/dashboard" });
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard",
  });
};

