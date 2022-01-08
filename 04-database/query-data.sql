SELECT *
FROM students;

SELECT first_name, height_in_cm
FROM students;

SELECT first_name, height_in_cm
FROM students
ORDER BY height_in_cm;

SELECT DISTINCT nationality
FROM students;

SELECT first_name, nationality
FROM students
WHERE nationality = 'Philippines';

SELECT first_name, height_in_cm
FROM students
WHERE height_in_cm >= 175;

SELECT *
FROM students
WHERE first_name LIKE 'J%';

SELECT *
FROM students
WHERE first_name NOT LIKE 'J%';

SELECT *
FROM students
WHERE nationality = 'Philippines'
    AND first_name LIKE 'J%';