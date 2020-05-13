-- CREATE DATABASE archquery;

CREATE EXTENSION pgcrypto;

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) DEFAULT NULL,
  body TEXT NOT NULL,
  creation_date TIMESTAMP NOT NULL DEFAULT NOW(),
  owner_user_id INTEGER REFERENCES users(id),
  post_type_id INTEGER REFERENCES post_types(id)
  parent_id INTEGER REFERENCES posts(id)
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  creation_date TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE post_types(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
