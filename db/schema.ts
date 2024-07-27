import { desc, sql } from "drizzle-orm";
import { pgTable, varchar, timestamp, text, json, integer, decimal } from 'drizzle-orm/pg-core';

export const Users = pgTable('users', {
    id: varchar('id').primaryKey(),
    username: varchar('userid').unique(),
    password: varchar('password'),
    timestamp: timestamp('date'),
    api_token: varchar('api_token'),
    sites: json('sites').default([]),
});

export const files = pgTable('files', {
    id: varchar('id').primaryKey(),
    user_id: varchar('user_id'),
    filename: varchar('filename'),
    description: text('description').default(''),
})