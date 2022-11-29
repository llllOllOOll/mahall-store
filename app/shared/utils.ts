import bcrypt from "bcryptjs"
import { ZodError } from "zod";

export async function passwordCompare(password:string, passwordHash:string){
  return await bcrypt.compare(password, passwordHash)
}

export async function passwordHash(password:string,salt:number  ){
  return await bcrypt.hash(password, salt)
}

export function errorAtPath(error: ZodError, path: string) {
  return error.issues.find((issue) => issue.path[0] === path)?.message;
}