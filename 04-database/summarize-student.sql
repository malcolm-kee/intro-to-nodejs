SELECT count(*)
FROM students;

SELECT nationality, count(*), avg(height_in_cm)
FROM students
GROUP BY nationality;

SELECT st.first_name, sum(en.credit_hour)
FROM students st
	LEFT JOIN enrollments en ON st.id = en.student_id
GROUP BY st.first_name;

SELECT st.first_name, en.semester, sum(en.credit_hour)
FROM students st
	LEFT JOIN enrollments en ON st.id = en.student_id
GROUP BY st.first_name, en.semester;

SELECT st.first_name, en.semester, sum(en.credit_hour)
FROM students st
	LEFT JOIN enrollments en ON st.id = en.student_id
GROUP BY st.first_name, en.semester
HAVING sum(credit_hour) > 5;