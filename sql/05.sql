-- group function
select avg(salary), max(salary), min(salary), sum(salary)
from employees;

select min(hire_date), max(hire_date)
from employees;

-- 과제: 최고월급과 최소월급의 차액을 조회하라.
select max(salary) - min(salary)
from employees;

select count(*) -- 아스트레이커(*) : 모든칼럼의미
from employees;

-- 과제: 70번 부서원이 몇명인 지 조회하라.
select count(*)
from employees
where department_id = 70;

select count(employee_id)
from employees;

select count(manager_id) -- 그룹함수는 파라미터로 지정한 칼럼의 필드value가 null이면 무시한다.
from employees;

-- 과제: manager가 없는 사원의 아이디, 이름, 매니저아이디를 조회하라.
select employee_id, last_name, manager_id
from employees
where manager_id is null;

-- single function / group function의 차이점은 null을 인식하느냐 여부

select avg(commission_pct) -- null값이 아닌 영업사원들의 커미션평균
from employees;

-- 과제: 조직의 평균 커미션율을 조회하라.
select avg(nvl(commission_pct, 0))
from employees;
---

select avg(all salary) -- all keyword(중복포함)가 생략된것이다.
from employees;

select avg(distinct salary) -- salary칼럼에서 중복값을 제거하고 계산한다.
from employees;

select count(department_id)
from employees;


select last_name
from employees
where department_id is null;

-- 과제: 사원이 배치된 부서의 개수를 조회하라.
select count(distinct department_id)
from employees; -- is not null은 줄필요가없는게 count는 그룹함수라서 null을 무시함.

-- 과제: 매니저 수를 조회하라.
select count(distinct manager_id)
from employees;

select department_id, count(employee_id)
from employees
group by department_id
order by department_id;

select employee_id
from employees
where department_id = 30;

--select department_id, job_id, count(employee_id)
--from employees
--group by department_id
--order by department_id;

select department_id, count(employee_id) -- group by절이 포함되었을경우, select절에는 그룹함수 또는 group by column이 와야한다.
from employees
group by department_id
order by department_id;

-- 과제: 직업별 사원수를 조회하라.
select job_id, count(employee_id)
from employees
group by job_id
order by 2;

select department_id, max(salary)
from employees
group by department_id
having department_id > 50; -- having절은 group을 필터링하기.

select department_id, max(salary)
from employees
group by department_id
having max(salary) > 10000; -- group function을 having절의 조건으로 준다.

select department_id, max(salary) max_sal
from employees
group by department_id
having max_sal > 10000;  -- having절에는 alias(별칭)이 올수없다.

-- where : row를 골라낸다, having : group을 골라낸다.
select department_id, max(salary)
from employees
where max(salary) > 50 -- where절에서는 group function이 사용불가능하다.
group by department_id;

-- single function : select절, where절
-- group function : select절, having절

select job_id, sum(salary) payroll
from employees
where job_id not like '%REP%'
group by job_id
having sum(salary) > 13000
order by payroll;

-- 과제] 매니저ID, 매니저별 관리 직원들 중 최소월급을 조회하라.
--      최소 월급이 $6000 초과여야 한다.
select manager_id, min(salary)
from employees
where manager_id is not null
group by manager_id
having min(salary) > 6000
order by 2 desc;

-- single function에서는 중첩이 가능, group function도 가능할까?
select max(avg(salary)) -- department_id 별 avg(salary)를 뽑고 그중에서 최대값을 구한다.
from employees
group by department_id;

select sum(max(avg(salary)) -- group function은 최대 1번까지 중첩이 가능하다.
from employees
group by department_id;

select department_id, round(avg(salary)) -- single function, group function 섞어서도 사용가능
from employees
group by department_id;

select department_id, round(avg(salary)) -- select절에 group by expreesion이 아닌 column(department_id)이 있기에 에러가 났다.
from employees;

select round(avg(salary))
from employees;

-- 과제: 2001년, 2002년, 2003년도별 입사자 수를 조회하라.
select to_char(hire_date, 'YYYY') hire_year, count(*) emp_cnt
from employees
group by to_char(hire_date, 'YYYY')
having to_char(hire_date, 'YYYY') in ('2001', '2002', '2003')
order by hire_year;

select to_char(hire_date, 'yyyy') hire_year, count(*) emp_cnt
from employees
where to_char(hire_date, 'yyyy') in (2001, 2002, 2003)
group by to_char(hire_date, 'yyyy')
order by hire_year;

select sum(decode(to_char(hire_date, 'yyyy'), '2001', 1, 0)) "2001",
    sum(decode(to_char(hire_date, 'yyyy'), '2002', 1, 0)) "2002",
    sum(decode(to_char(hire_date, 'yyyy'), '2003', 1, 0)) "2003"
from employees;

select count(case when hire_date like '2001%' then 1 else null end) "2001",
    count(case when hire_date like '2002%' then 1 else null end) "2002",
    count(case when hire_date like '2003%' then 1 else null end) "2003"
from employees;
---------------------------------------------------------------

-- 과제: 직업별, 부서별 월급합을 조회하라.
--      부서는 20, 50, 80 이다.
select job_id, department_id, 
    sum(decode(department_id, 20, salary, 0)) "20번 부서의 월급합",
    sum(decode(department_id, 50, salary, 0)) "50번 부서의 월급합",
    sum(decode(department_id, 80, salary, 0)) "80번 부서의 월급합"
from employees
group by job_id, department_id
order by department_id, 3, 4, 5;

select job_id, sum(decode(department_id, 20, salary)) "20",
    sum(decode(department_id, 50, salary)) "50",
    sum(decode(department_id, 80, salary)) "80"
from employees
group by job_id;