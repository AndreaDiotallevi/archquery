-- CREATE DATABASE archquery;

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) DEFAULT NULL,
  body TEXT NOT NULL,
  creation_date TIMESTAMP NOT NULL DEFAULT NOW(),
  tags VARCHAR(50) ARRAY,
  owner_user_id INTEGER REFERENCES users(id),
  post_type_id INTEGER REFERENCES post_types(id),
  parent_id INTEGER REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE,
  answer_count INTEGER DEFAULT 0,
  score INTEGER DEFAULT 0,
  accepted_answer_id INTEGER REFERENCES posts(id)
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

CREATE TABLE tags(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE posts_tags(
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id) ON UPDATE CASCADE ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tags(id) ON UPDATE CASCADE
);

CREATE TABLE votes(
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id),
  vote_type_id INTEGER REFERENCES vote_types(id),
  user_id INTEGER REFERENCES users(id),
  creation_date TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE vote_types(
  id SERIAL PRIMARY KEY,
  name VARCHAR(30)
);

-- ALTER TABLE posts DROP CONSTRAINT posts_parent_id_fkey;
-- ALTER TABLE posts ADD CONSTRAINT posts_parent_id_fkey foreign key (parent_id) references posts(id) on update cascade on delete cascade;
-- alter table posts add column accepted_answer_id INTEGER REFERENCES posts(id);