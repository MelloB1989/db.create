CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar PRIMARY KEY NOT NULL,
	"userid" varchar,
	"password" varchar,
	"date" timestamp,
	"api_token" varchar,
	"sites" json DEFAULT '[]'::json,
	CONSTRAINT "users_userid_unique" UNIQUE("userid")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "files" (
	"id" varchar PRIMARY KEY NOT NULL,
	"user_id" varchar,
	"filename" varchar,
	"description" text DEFAULT ''
);
