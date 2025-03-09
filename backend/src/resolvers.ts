import { jobs, companies } from "@/db/schema";
import { getCompanies, getCompanyById, getCompanyJobs, getJobById, getJobs } from "@/db/queries";

export const resolvers = {
    Query: {
        jobs: async () => {
            return getJobs();
        },
        job: async (_root: {}, { id }: { id: string }) => {
            console.log(_root);
            return getJobById(id);
        },
        companies: async () => {
            return getCompanies();
        },
    },
    Job: {
        company: async (job: typeof jobs.$inferInsert) => {
            return getCompanyById(job.companyId);
        },
    },
    Company: {
        jobs: async (company: typeof companies.$inferInsert) => {
            return getCompanyJobs(company.id!);
        }
    }
}
