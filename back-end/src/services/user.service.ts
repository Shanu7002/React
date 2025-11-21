import { db } from "../config/database";
import { insertUserSQL, findUserByEmailSQL } from "../models/user.model";
import { hashPassword, comparePassword } from "../utils/passwordHash";

export async function createUserService(name: string, email: string, password: string) {
  const hashed = await hashPassword(password);

  const result = await db.query(insertUserSQL, [name, email, hashed]);
  return result.rows[0];
}
