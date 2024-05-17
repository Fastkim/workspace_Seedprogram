-- subquery
select last_name, salary
from employees
where salary > (select salary
                from employees
                where last_name = 'Abel');

select last_name, job_id, salary
from employees
where job_id = (select job_id
                from employees
                where last_name = 'Ernst')
and salary > (select salary
                from employees
                where last_name = 'Ernst');
                
-- where절에서의 서브쿼리는 한개의 로우(행)만 와야합니다.
-- 이유는 비교연산자(하나의 값을 기준으로 비교)를 사용했기때문이다.

-- 과제: IT부서에서 일하는 사원들의 부서번호, 이름, 직업을 조회하라.
select department_id, last_name, job_id
from employees
where department_id = (select department_id
                        from departments
                        where department_name = 'IT');

-- 과제: Abel 과 같은 부서에서 일하는 동료들의 이름, 입사일을 조회하라.
--      이름으로 오름차순 정렬하라.
select last_name, hire_date
from employees
where department_id = (select department_id
                        from employees
                        where last_name = 'Abel')
and not last_name = 'Abel'
order by 1;

select last_name, salary
from employees
where salary > (select salary
                from employees
                where last_name = 'King'); -- king은 동명이인이 두명있으므로 >연산자로는 성립되지 않음(에러)
                
select last_name, job_id, salary
from employees
where salary = (select min(salary)
                from employees); -- 그룹function은 return 값이 하나이므로 사용가능

select department_id, min(salary)
from employees
group by department_id
having min(salary) > (select min(salary)
                        from employees
                        where department_id = 50); -- >,<,= 연산자에 따라서 서브쿼리의 return값이 한개이냐 n개이냐 생각해야함.
                        
-- 과제: 회사 평균 월급 이상 버는 사원들의 사번, 이름, 월급을 조회하라.
--      월급 내림차순 정렬하라.
select employee_id, last_name, avg(salary)
from employees
group by employee_id, last_name
having avg(salary) >= (select avg(salary)
                        from employees)
order by 3 desc;

select employee_id, last_name, salary
from employees
where salary in (select min(salary)
                from employees
                group by department_id);
