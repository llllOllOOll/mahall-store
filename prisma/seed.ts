import { PrismaClient } from "@prisma/client";

const db = new PrismaClient()

async function seed(){
  await Promise.all(
    getUsers().map((user) =>{
      return db.user.create({data: user})
    })
  )
}

seed()

function getUsers(){
  return [
    {name:"Mr Seven", email:"seven@gmail.com", password:"123",role:'admin'}, 
    {name:"Luna Miranda", email:"luna@gmail.com", password:"123",role:'admin'}, 
  ]
}