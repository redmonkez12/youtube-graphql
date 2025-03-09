import "dotenv/config";
import { eq } from "drizzle-orm";

import { db } from "@/db";
import * as schema from "@/db/schema";

const main = async () => {
    try {
        console.log("Seeding started");

        await db.insert(schema.companies).values([
            {
                name: "Microsoft",
                description: "Big Tech Company",
            },
            {
                name: "Google",
                description: "Big Tech Company",
            },
        ]);

        const microsoft = await db.select().from(schema.companies).where(eq(schema.companies.name, "Microsoft"));
        const google = await db.select().from(schema.companies).where(eq(schema.companies.name, "Google"));

        await db.insert(schema.jobs).values([
            {
                title: "Java Developer",
                description: "Greenfield project",
                companyId: microsoft[0]?.id!,
            },
            {
                title: "C++ Developer",
                description: "Greenfield project",
                companyId: google[0]?.id!,
            }
        ]);

        console.log("Seeding finished");
    } catch (e) {
        console.log("Seeding error", e);
    }
}

main();