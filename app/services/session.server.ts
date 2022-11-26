// app/services/session.server.ts
import { createCookieSessionStorage } from "@remix-run/node";
import { AuthorizationError } from "remix-auth";

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session", // use any name you want here
    sameSite: "lax", // this helps with CSRF
    path: "/", // remember to add this so the cookie will work in all routes
    httpOnly: true, // for security reasons, make this cookie http only
    secrets: ["s3cr3t"], // replace this with an actual secret
    secure: process.env.NODE_ENV === "production", // enable this in prod only
  },
});

// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;

// define the user model
export type User = {
  id: string;
  email: string;
  password: string;
  role: string;
};


const users : User[] = [
  {id:"1", email:'seven@gmail.com', password:'123', role:'admin'}
]

export async function login(email, password){
  const user = users.find(u => u.email === email)
  // if (!user) {
  //   return {email:"", password:""}
  // }
  
  if (user) {
   if ( user.password !== password ) {
    return null
   }
  }

  return user
}