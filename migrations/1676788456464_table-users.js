export const shorthands = undefined;

export function up(pgm) {
  pgm.sql(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            bio VARCHAR(255),
            username VARCHAR(50) NOT NULL
        )`);
}

export function down(pgm) {
  pgm.sql(`
            DROP TABLE users
        `);
}
