import { db } from "@/db";
import { jobs } from "@/db/schema";

export const resolvers = {
    Query: {
        jobs: async () => {
            return await db.select().from(jobs);
        },
    },
}
