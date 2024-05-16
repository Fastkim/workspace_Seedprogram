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