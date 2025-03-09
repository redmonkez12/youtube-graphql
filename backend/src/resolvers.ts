import { db } from "@/db";
import { jobs, companies } from "./db/schema";
import { eq } from "drizzle-orm";

export const resolvers = {
    Query: {
        jobs: async () => {
            return await db.select().from(jobs);
        },
        companies: async () => {
            return db.select().from(companies);
        },
    },
    Job: {
        company: async (job: typeof jobs.$inferInsert) => {
            const company = await db.select().from(companies).where(eq(companies.id, job.companyId));

            return company[0];
        },
    },
    Company: {
        jobs: async (company: typeof companies.$inferInsert) => {
            const result = await db.select().from(jobs).where(eq(jobs.companyId, company.id!));

            return result;
        }
    }
}
