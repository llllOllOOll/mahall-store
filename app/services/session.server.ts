// app/services/session.server.ts
import { createCookieSessionStorage, LoaderFunction } from "@remix-run/node";

let secrets = process.env.COOKIE_SECRET
if (!secrets) {
  throw new Error("You need to set a COOKIE_SET enviroment variable.")
}

export let sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "_session", 
    path: "/", 
    httpOnly: true, 
    secrets: [secrets], 
    secure: process.env.NODE_ENV === "production", 
  },
});

// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;

// // define the user model
// export type User = {
//   id: string;
//   email: string;
//   password: string;
//   role: string;
// };


// const users : User[] = [
//   {id:"1", email:'seven@gmail.com', password:'123', role:'admin'},
//   {id:"2", email:'luna@gmail.com', password:'123', role:'admin'},
//   {id:"3", email:'toni@gmail.com', password:'123', role:'admin'},
//   {id:"4", email:'darlecio@gmail.com', password:'123', role:'admin'},
//   {id:"5", email:'jorge@gmail.com', password:'123', role:'admin'},
// ]

// export async function login(email:string, password:string){
//   const user = users.find(u => u.email === email)
//   // if (!user) {
//   //   return {email:"", password:""}
//   // }
  
//   if (user) {
//    if ( user.password !== password ) {
//     return null
//    }
//   }

//   return user
// }