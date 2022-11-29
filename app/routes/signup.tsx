import { ActionArgs, json, redirect } from "@remix-run/node";
import { useCatch } from "@remix-run/react";
import { z } from "zod";
import { zx } from "zodix";
import { SignUp } from "~/components/auth/signup";
import { BackArrowButton } from "~/components/navigation/BackArrow";
import { register } from "~/services/auth.server";
import { errorAtPath } from "~/shared/utils";

export default function SignUpPage() {
  return (
    <>
      <BackArrowButton />
      <SignUp />
    </>
  )
}

export const action = async ({ request }: ActionArgs) => {

  const schema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  });

  const result = await zx.parseFormSafe(request, schema)
  if (!result.success) {
    return json({
      success: false,
      emailError: errorAtPath(result.error, "email"),
      passwordError: errorAtPath(result.error, "password"),
    })
  }

  const registerResult = await register({ email: result.data.email, password: result.data.password })
  if (registerResult === 'exists' || !registerResult) {
    return json({
      success: false,
      message: 'user already exists',
    })
  }

  return redirect("/login")
}

export function CatchBoundary() {
  const caught = useCatch()
  return <h1 className="text-PrimaryBlue-500">Caught error: {caught.statusText}</h1>
}