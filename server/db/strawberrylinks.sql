-- Creates the Users table.
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  sub SERIAL PRIMARY KEY,     -- Auth0 user identifier (sub claim in JWT)
  email VARCHAR(255) NOT NULL,    -- User's email address
);

-- Creates the Links table.
DROP TABLE IF EXISTS links CASCADE;

CREATE TABLE links (
  link_id SERIAL PRIMARY KEY,     -- Unique identifier for each link
  original_link TEXT NOT NULL,    -- The original (long) URL
  short_link TEXT NOT NULL,   -- The shortened version of the URL
  clicks INT DEFAULT 0,           -- Count of clicks, initialized to 0
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of link creation (current time by default)
  permanent BOOLEAN NOT NULL DEFAULT TRUE, -- Indicates if the link is permanent (true by default)
  expiration_date TIMESTAMP DEFAULT NULL, -- Timestamp of link expiration date (null by default)
  sub INT REFERENCES users(sub) -- Reference to the user who created the link
);

-- Creates the UserLinks table.
DROP TABLE IF EXISTS userlinks CASCADE;

CREATE TABLE userlinks (
  user_link_id SERIAL PRIMARY KEY,          -- Unique identifer for user-link relationships
  sub INT REFERENCES users(sub),    -- Reference to the user who created the link
  link_id INT REFERENCES links(link_id)     -- Reference to the shortened link associated with the user
);
