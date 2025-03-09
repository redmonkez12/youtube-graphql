import { db } from "@/db";
import { jobs, companies } from "@/db/schema";
import { notFoundError } from "@/errors/notFoundError";
import { eq } from "drizzle-orm";

export async function getJobs() {
    return db.select().from(jobs);
}

export async function getCompanies() {
    return db.select().from(companies)
}

export async function getJobById(id: string) {
    const job = await db.query.jobs.findFirst({
        where: eq(companies.id, id)
    });

    if (!job) {
        throw notFoundError(`Job not found [${id}].`);
    }

    return job;
}

export async function getCompanyById(companyId: string) {
    return await db.query.companies.findFirst({
        where: eq(companies.id, companyId)
    });
}

export async function getCompanyJobs(companyId: string) {
    return db.select().from(jobs).where(eq(jobs.companyId, companyId));
}