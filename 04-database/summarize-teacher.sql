SELECT avg(salary)
FROM teachers;

SELECT co.department, avg(tc.salary)
FROM teachers tc
LEFT JOIN courses co ON tc.id_num = co.teacher_id
GROUP BY co.department;
