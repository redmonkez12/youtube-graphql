import "dotenv/config";
import { eq } from "drizzle-orm";

import * as schema from "@/db/schema";
import { db } from "@/db";

const main = async () => {
    try {
        console.log("Seeding database");

        // await db.insert(schema.companies).values([
        //     {
        //         name: "Microsoft",
        //         description: "Big Tech company",
        //     },
        //     {
        //         name: "Google",
        //         description: "Big Tech company",
        //     },
        // ]);

        const microsoft = await db.select().from(schema.companies).where(eq(schema.companies.name, "Microsoft"));
        const google = await db.select().from(schema.companies).where(eq(schema.companies.name, "Google"));

        await db.insert(schema.jobs).values([
            {
                title: "Java Developer",
                description: "Greendfield project",
                companyId: microsoft[0]?.id!,
            },
            {
                title: "C++ Developer",
                description: "Greendfield project",
                companyId: google[0]?.id!,
            },
        ]);

        console.log("Seeding finished");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed the database");
    }
}

main();
