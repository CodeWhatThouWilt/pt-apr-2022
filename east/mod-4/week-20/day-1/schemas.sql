CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(20) UNIQUE NOT NULL, -- VARCHAR will allow any length up to and including 20
    password CHAR(60) NOT NULL -- CHAR will only allow a string length of 60 here
);

INSERT INTO users (username, password)
VALUES
    ('yake', 'password'),
    ('schmake', 'secure'),
    ("dood", "wheresmycar"),
    ("i", "dontknow");

SELECT * FROM users;

SELECT username, password FROM users;