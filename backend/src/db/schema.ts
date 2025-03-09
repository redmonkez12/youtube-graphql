import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";

export const companies = pgTable("companies", {
    id: text("id").primaryKey().$defaultFn(() => createId()),
    name: text("name").notNull(),
    description: text("description"),
    createdAt:  timestamp("created_at").defaultNow().notNull(),
});

export const jobs = pgTable("jobs", {
    id: text("id").primaryKey().$defaultFn(() => createId()),
    title: text("title").notNull(),
    description: text("description"),
    companyId: text("company_id").references(() => companies.id, { onDelete: "cascade" }).notNull(),
    createdAt:  timestamp("created_at").defaultNow().notNull(),
});

export const companiesRelations = relations(companies, ({ many }) => ({
    jobs: many(jobs),
}))

export const jobsRelations = relations(jobs, ({ one }) => ({
    companies: one(companies),
}));
