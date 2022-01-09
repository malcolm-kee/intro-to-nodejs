UPDATE students
SET height_in_cm = 173
WHERE first_name = 'Malcolm';

UPDATE enrollments
SET enrolled_date = '2022-01-05'
WHERE student_id = (
	SELECT id
	FROM students
	WHERE first_name = 'Malcolm'
);