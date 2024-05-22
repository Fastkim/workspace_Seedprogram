--hr user
drop table hire_dates; -- 복습을 위한 코드

create table hire_dates(
emp_id number(8), -- emp_id default값은 명시되지않았으므로 null
hire_date date default sysdate); -- date default값은 sysdate

select tname
from tab; -- hr스키마(테이블의 집합)에 있는 테이블을 보여준다.
-- data dictionary : 시스템이 생성하여 가지고있는 자체적인 메타데이터를 말한다.

-- 쓰레기 테이블은 BIN으로 시작함.
-- delete table 했을때 쓰레기통에 BIN%이름으로 저장되고 commit했을때 적용된다.
select tname
from tab
where tname not like 'BIN%';

-- DDL(Data Definition Language) : 객체를 정의하는 언어

insert into hire_dates -- transaction 시작
values(1, to_date('2024/05/20'));

insert into hire_dates
values(2, null);

insert into hire_dates(emp_id)
values(3);

select *
from hire_dates;

-- DCL (Data Control Language)
-- system user로 DB에 접속
create user you identified by you; -- you라는 이름의 유저계정 생성 비밀번호도 you
-- role
grant connect, resource to you; -- create session 은 connect와 resource에 있다.

-- you user
select last_name, salary, department_id
from employees
where (salary between 500 and 12000) and department_id in (20, 50); 

select last_name, job_id, salary
from employees
where job_id = 'SA_MAN' and salary not in (2500, 3500);

select initcap(last_name), length(last_name)
from employees
where last_name like 'J%' or
    last_name like 'A%' or
    last_name like 'M%';
    
select last_name, last_day(hire_date) 첫월급일
from employees
where months_between(sysdate,hire_date) >= 12 * 20;

select last_name, job_id, salary
from employees
where job_id like 'SA%' and salary not in (2500, 3500);

select manager_id, min(salary)
from employees
where manager_id is not null
group by manager_id
having min(salary) > 6000;

select job_id, department_id
from employees
group by job_id,department_id

select e.last_name, e.job_id, e.department_id,
    d.department_name, l.city
from employees e join departments d
on e.department_id = d.department_id
join locations l
on d.location_id = l.location_id
and l.city = 'Toronto';

select e.last_name, e.hire_date, m.last_name, m.hire_date
from employees e join employees m
on m.manager_id = e.employee_id
and m.hire_date < e.hire_date;