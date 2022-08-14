-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  personal_id INTEGER NOT NULL,
  department VARCHAR(255) NOT NULL,
  employment_status VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
