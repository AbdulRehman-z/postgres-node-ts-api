export function up(pgm: any) {
  pgm.sql(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
            bio VARCHAR(255),
            username VARCHAR(50) NOT NULL
        )`);
}

export function down(pgm: any) {
  pgm.sql(`
            DROP TABLE users
        `);
}
