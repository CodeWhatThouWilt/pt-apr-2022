CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(30) UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL,
    hasDog BOOLEAN DEFAULT true
);

INSERT INTO users (username, email, hasDog)
VALUES
    ('yake', 'yake@demo.com', true),
    ('schmake', 'notyake@demo.com', false),
    (null, 'yake@here.com', true);

INSERT INTO users (username, email)
VALUES
    (null, "new@emaill.com");
