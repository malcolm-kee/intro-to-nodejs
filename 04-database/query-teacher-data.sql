SELECT full_name
FROM teachers
WHERE salary > 4000;

SELECT full_name
FROM teachers
WHERE salary > 4000
    AND hire_date > '2010-01-01';

SELECT full_name
FROM teachers
ORDER BY hire_date DESC;