// app/services/auth.server.ts
import { User } from "@prisma/client";
import { json } from "@remix-run/node";
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";
import {  sessionStorage } from "~/services/session.server";
import { passwordCompare, passwordHash } from "~/shared/utils";
import { createUser, getUser } from "./usersServices.server";

export let authenticator = new Authenticator<Pick<User, "id" | "email" | "password" |"role">>(sessionStorage);

authenticator.use(
  new FormStrategy(async ({ form }) => {
    let email = form.get("email") as string
    let password = form.get("password") as string
    
    let user = await login({email, password});
    
    if (!user) {
      throw new AuthorizationError("User not found")
    }
    return user;
  }),
);

export type LoginProps = {
  email: string;
  password: string;
};

export async function login({email,password}: LoginProps) {
  const user = await getUser(email)

  if (!user) return null;

  const isCorrectPassword = await passwordCompare(password, user.password);

  if (!isCorrectPassword) return null;

  return { id: user.id, email, password:user.password, role: user.role };
}

export async function register({email,password}: LoginProps) {
  const verifyUser = await getUser(email)
  console.log(verifyUser)
  if (verifyUser){
    return 'exists'
  }

  const passHash = await passwordHash(password, 10);

  const user = await createUser({email, password:passHash, name:'',role:'admin'});
  return { id: user.id, email };
}