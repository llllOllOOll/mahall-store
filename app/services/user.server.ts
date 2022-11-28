import { db } from "./db.server";
import bcrypt from "bcryptjs"

export type LoginProps = {
  email: string;
  password: string;
};

export async function login({email,password}: LoginProps) {
  const user = await db.user.findUnique({
    where: { email },
  });

  if (!user) return null;

  const isCorrectPassword = await  bcrypt.compare(
    password, user.password
  );

  if (!isCorrectPassword) return null;

  return { id: user.id, email, password:user.password, role: user.role };
}

export async function register({email,password}: LoginProps) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await db.user.create({
    data: { email, password:passwordHash, name:'', role: 'admin' },
  });
  return { id: user.id, email };
}