DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS teachers;

CREATE TABLE teachers (
    id_num varchar(30),
    full_name varchar(250),
    salary numeric,
    hire_date date
);

INSERT INTO teachers (full_name, id_num, salary, hire_date)
VALUES ('Malcolm Kee', 'A993823i', 2700, '2019-10-10'),
    ('John Doe', 'X0239485b', 8400, '2010-10-10'),
    ('Emma Watson', 'M0239488', 120000, '2006-03-11'),
    ('Tony Stark', 'TS92384', 3599, '2020-09-03'),
    ('Dr Strange', 'DS92384', 7345, '1950-09-03'),
    ('Peter Parker', 'PP92384', 2240, '2018-01-03'),
    ('Harry Potter', 'HP02384', 3599, '2020-08-02');

CREATE TABLE courses (
    id varchar(25),
    name text,
    teacher_id varchar(30),
    department varchar(25)
);

INSERT INTO courses (id, name, teacher_id, department)
VALUES ('JS001', 'Intro to JavaScript', 'A993823i', 'Web Development'),
    ('CS050', 'Intro to Computer Science', 'TS92384', 'Computer Science'),
    ('HT001', 'Intro to HTML', 'A993823i', 'Web Development'),
    ('DB001', 'Fundamentals of Database', 'X0239485b', 'Computer Science'),
    ('VS001', 'Intro to Visual Studio Code', 'PP92384', 'Tools');
