import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { config } from "../config";
const sql = postgres(config.db, { max: 1 })
const db = drizzle(sql);

const m = async() => {
    await migrate(db, { migrationsFolder: "drizzle" });
    await sql.end();
}

m();