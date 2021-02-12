-- Create a table in a specific database
CREATE TABLE team_members (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  first_name VARCHAR(40),
  last_name VARCHAR(40)
);

-- Add information into the database
INSERT INTO films (code, title, did, date_prod, kind) VALUES
    ('B6717', 'Tampopo', 110, '1985-02-10', 'Comedy'),
    ('HG120', 'The Dinner Game', 140, DEFAULT, 'Comedy');

-- Get all records from a table
SELECT * FROM team_members;

-- Get a single matching record from the table
SELECT * FROM team_members WHERE id = 5;

-- Delete all records from a table
DELETE FROM team_members;

-- Delete a single matching record from the table
DELETE FROM team_members WHERE id = 5;
