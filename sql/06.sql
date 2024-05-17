-- join
select department_id, department_name, location_id
from departments;

select location_id, city -- 컬럼이름은 단수형
from locations; -- 테이블이름은 복수형

-- equi join
select department_id, department_name, location_id, city
from departments natural join locations;
-- 공통칼럼을 = 연산했을때 true가 나오는  행들을 붙인것
--  equi join : oracle 관점에서는 공통칼럼의 데이터타입이 일치해야한다, 업무관점에서는 공통칼럼이름이 동일하면된다.

select department_id, department_name, location_id, city
from departments natural join locations
where department_id in (20, 50); --join에 조건을 넣는방법
----

-- join을 사용할때는 공통칼럼을 using ()으로 표시해준다.
select employee_id, last_name, department_id, location_id
from departments join employees
using (department_id);

-- 위에서 누락된 1인의 이름, 부서번호를 조회하라.
select last_name, department_id
from employees
where department_id is null;

select employee_id, last_name, department_id, location_id
from employees natural join departments;

-- natural join - 양 테이블의 공통칼럼을 모두 일치하는 결과를 산출
-- join using - 양 테이블의 using문으로 (공통칼럼)을 명시할것만 일치하는 결과를 산출

select locations.city, departments.department_name
from locations join departments
using (location_id)
where location_id = 1400;

select l.city, d.department_name
from locations l join departments d
using (location_id)
where l.location_id = 1400; -- 에러

select l.city, d.department_name, d.location_id -- using절의 칼럼에는 접두사를 붙일수 없다.
from locations l join departments d
using (location_id)
where location_id = 1400; -- 접두사(별칭) d,l은 where절에는 사용못함

select e.last_name, d.department_name
from employees e join departments d
using(department_id)
where d.manager_id = 100; -- using절에는 안쓴 공통칼럼은 select절이나 where절에서 접두사를 반드시 붙여야한다.

select e.last_name, d.department_name
from employees e join departments d
using(department_id)
where last_name = 'King'; -- 공통칼럼이 아닌 경우에는
---

select e.employee_id, e.last_name, e.department_id,
    d.department_id, d.location_id
from employees e join departments d
on (e.department_id = d.department_id); -- 괄호()는 생략가능

-- join할 column이 3개 이상일경우
select employee_id, city, department_name
from employees e join departments d
on e.department_id = d.department_id
join locations l
on d.location_id = l.location_id;

-- 과제: 위 문장을 using 으로 refactoring 하라.
select employee_id, city, department_name
from employees e join departments d
using(department_id)
join locations l
using(location_id);

select e.employee_id, e.last_name, e.department_id,
    d.department_id, d.location_id
from employees e join departments d
on e.department_id = d.department_id
where e.manager_id = 149;

-- on이 조건절이라는 관점에서 and 사용가능
select e.employee_id, e.last_name, e.department_id,
    d.department_id, d.location_id
from employees e join departments d
on e.department_id = d.department_id
and e.manager_id = 149;

-- 과제: Toronto 에 위치한 부서에서 일하는 사원들의
--      이름, 직업, 부서번호, 부서명, 도시를 조회하라.
select e.last_name, e.job_id, e.department_id,
    d.department_name, l.city
from employees e join departments d
on e.department_id = d.department_id
join locations l
on d.location_id = l.location_id
and l.city = 'Toronto';

-- non-equi join
select e.last_name, e.salary, e.job_id
from employees e join jobs j
on e.salary between j.min_salary and j.max_salary
and j.job_id = 'IT_PROG';

-- self join (하나의 테이블에 pk,fk가 같이있을때 사용하는 조인)
select worker.last_name emp, manager.last_name mgr
from employees worker join employees manager
on worker.manager_id = manager.employee_id;
-- 컬럼name은 유일해야한다.

select worker.last_name emp, manager.last_name mgr
from employees worker join employees manager
on manager_id = employee_id; -- self join은 on절에서 접두사를 생략할수없다.

select last_name emp, last_name mgr -- self join은 select절에서 접두사를 생략할수없다.
from employees worker join employees manager
on worker.manager_id = manager.employee_id;

-- 과제: 같은 부서에서 일하는 사원들의 부서번호, 이름, 동료명을 조회하라.
select e.department_id, e.last_name employee, c.last_name colleague
from employees e join employees c
on e.department_id = c.department_id
and e.employee_id <> c.employee_id
order by 1, 2, 3;

-- 과제: Davies 보다 후에 입사한 사원들의 이름, 입사일을 조회하라.
select e.last_name, e.hire_date
from employees e join employees d
on d.last_name = 'Davies'
and e.hire_date > d.hire_date;

-- manager보다 먼저 입사한 사원들의 이름 입사일을 조회하라.
select w.last_name, w.hire_date, m.last_name, m.hire_date
from employees w join employees m
on w.manager_id = m.employee_id
and w.hire_date < m.hire_date;

-- inner join
select e.last_name, e.department_id, d.department_name
from employees e join departments d
on e.department_id = d.department_id;

-- outer join
select e.last_name, e.department_id, d.department_name
from employees e left outer join departments d -- inner join + employees
on e.department_id = d.department_id;

select e.last_name, e.department_id, d.department_name
from employees e right outer join departments d -- inner join + departments
on e.department_id = d.department_id;

select e.last_name, e.department_id, d.department_name
from employees e full outer join departments d -- inner join + employees + departments
on e.department_id = d.department_id;

-- 과제: 사원들의 이름, 사번, 매니저명, 매니저의 사번을 조회하라.
--      King 사장도 테이블에 포함하라.
select w.last_name, w.employee_id, m.last_name, m.employee_id
from employees w left outer join employees m
on w.manager_id = m.employee_id
order by 2;

--- where절 equi join
select d.department_id, d.department_name, d.location_id, l.city
from departments d, locations l
where d.location_id = l.location_id;

select d.department_id, d.department_name, d.location_id, l.city
from departments d, locations l
where d.location_id = l.location_id
    and d.department_id in (20, 50);
    
select e.last_name, d.department_name, l.city
from employees e, departments d, locations l
where e.department_id = d.department_id
and d.location_id = l.location_id;

-- where절 non-equi-join
select e.last_name, e.salary, e.job_id
from employees e, jobs j
where e.salary between j.min_salary and j.max_salary
and j.job_id = 'IT_PROG';

select e.last_name, e.department_id, d.department_name
from employees e, departments d
where e.department_id(+) = d.department_id; -- right outer join

select e.last_name, e.department_id, d.department_name
from employees e, departments d
where e.department_id(+) = d.department_id(+); -- full outer join은 불가능

select worker.last_name || ' works for ' || manager.last_name
from employees worker, employees manager
where worker.manager_id = manager.employee_id;