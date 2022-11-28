import bcrypt from "bcryptjs"

export async function passwordCompare(password:string, passwordHash:string){
  return await bcrypt.compare(password, passwordHash)
}

export async function passwordHash(password:string,salt:number  ){
  return await bcrypt.hash(password, salt)
}