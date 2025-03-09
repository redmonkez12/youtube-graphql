import { db } from "@/db";
import { jobs, companies } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getJobs() {
    return db.select().from(jobs);
}

export async function getCompanies() {
    return db.select().from(companies)
}

export async function getJobById(id: string) {
    return await db.query.jobs.findFirst({
        where: eq(companies.id, id)
    });
}

export async function getCompanyById(companyId: string) {
    return await db.query.companies.findFirst({
        where: eq(companies.id, companyId)
    });
}

export async function getCompanyJobs(companyId: string) {
    return db.select().from(jobs).where(eq(jobs.companyId, companyId));
}