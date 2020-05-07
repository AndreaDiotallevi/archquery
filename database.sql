-- CREATE DATABASE archquery;

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(150),
  body VARCHAR(30000),
  creation_date TIMESTAMP
);
