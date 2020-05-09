-- CREATE DATABASE archquery;

CREATE EXTENSION pgcrypto;

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  body TEXT NOT NULL,
  creation_date TIMESTAMP NOT NULL DEFAULT NOW(),
  owner_user_id INTEGER REFERENCES users(id) 
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  display_name VARCHAR(50) NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  creation_date TIMESTAMP NOT NULL DEFAULT NOW()
);
