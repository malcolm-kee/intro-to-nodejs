CREATE DATABASE studemy;

-- run in the query tools after expanding studemy database
CREATE TABLE students (
    id bigserial,
    first_name varchar(25),
    last_name varchar(50),
    nationality varchar(100),
    height_in_cm numeric,
    birthday date
);

INSERT INTO students (first_name, last_name, nationality, height_in_cm, birthday)
VALUES ('Malcolm', 'Kee', 'Malaysia', 172, '1990-10-13'),
    ('John', 'Doe', 'Canada', 175, '1989-12-12'),
    ('John', 'Wick', 'United State', 180, '1980-03-12'),
    ('Siti', 'Nurhaliza', 'Malaysia', 165, '1985-03-23'),
    ('David', 'Licauco', 'Philippines', 180, '1995-06-15'),
    ('JJ', 'Lin', 'Singapore', 172, '1981-03-27'),
    ('Juancho', 'Trivino', 'Philippines', 182, '1993-04-13');