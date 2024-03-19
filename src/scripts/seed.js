const { db } = require("@vercel/postgres");
const { rsvp } = require("../app/lib/placeholder-data.js");
const bcrypt = require("bcrypt");

async function seedRSVP(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "rsvp" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS rsvps (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "rsvp" table`);

    // Insert data into the "rsvp" table
    const insertedRSVPs = await Promise.all(
      rsvps.map(async (rsvp) => {
        const hashedPassword = await bcrypt.hash(rsvp.password, 10);
        return client.sql`
        INSERT INTO rsvps (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedRSVPs.length} rsvps`);

    return {
      createTable,
      rsvps: insertedRSVPs,
    };
  } catch (error) {
    console.error("Error seeding rsvp:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedRSVP(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
