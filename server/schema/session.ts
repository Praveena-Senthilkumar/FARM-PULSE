// server/schema/session.ts
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const session = pgTable("session", {
  sid: text("sid").primaryKey(),
  sess: text("sess").notNull(),
  expire: timestamp("expire", { withTimezone: true }).notNull(),
});
