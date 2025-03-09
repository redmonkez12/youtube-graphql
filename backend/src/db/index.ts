import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);
export const db =  drizzle({ client: sql, schema });