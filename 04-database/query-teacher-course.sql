SELECT tc.full_name, co.name
FROM teachers tc
	JOIN courses co ON co.teacher_id = tc.id_num
ORDER BY tc.full_name;

SELECT tc.full_name
FROM teachers tc
	LEFT JOIN courses co ON co.teacher_id = tc.id_num
WHERE co.teacher_id IS NULL;