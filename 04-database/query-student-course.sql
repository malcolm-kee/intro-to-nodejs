SELECT *
FROM students
	JOIN enrollments ON students.id = enrollments.student_id;

SELECT first_name, course_id, credit_hour
FROM students
	JOIN enrollments ON students.id = enrollments.student_id;

SELECT st.first_name, en.course_id, en.credit_hour
FROM students AS st
	JOIN enrollments AS en ON st.id = en.student_id
ORDER BY st.id;

SELECT st.first_name, en.course_id, en.credit_hour
FROM students AS st
	LEFT JOIN enrollments AS en ON st.id = en.student_id
WHERE en.id IS NULL
ORDER BY st.id;

