-- DDL(Data Definition Language)
drop table emp;
drop table dept;

create table emp(
employee_id number(6), -- 6자리
first_name varchar2(20), -- 20byte
last_name varchar2(25),
email varchar2(25),
phone_number varchar2(20),
hire_date date,
job_id varchar2(10),
salary number(8),
commission_pct number(2, 2),
manager_id number(6),
department_id number(4)
);

create table dept(
department_id number(4),
department_name varchar2(30),
manager_id number(6),
location_id number(4));

-- DML(Data Manipulation Language), --칼럼 : 테이블 관점, 필드 : 레코드 관점
insert into dept(department_id, department_name, manager_id, location_id) 
values(300, 'Public Relation', 100, 1700);

insert into dept(department_id, department_name)
values(310, 'Purchasing');

select * from dept; -- 위의 데이터는 oracle 메모리에 가지고있다. 즉 언제든지 버릴수 있고, 전기끊기면 불러올수없다는뜻

commit; -- 방금 데이터가 디스크에 기록이 되었다.

-- 작업하나(시작해서 commit할때까지)를 transaction이라고 한다. commit을 한 직후에는 transaction이 없다.
insert into emp(employee_id, first_name, last_name,
                email, phone_number, hire_date,
                job_id, salary, commission_pct,
                manager_id, department_id)
values(300, 'Louis', 'Pop',
        'Pop@gmail.com', '010-123-1234', sysdate,
        'AC_ACCOUNT', 6000, null,
        205, 110);
-- 필드네임을 생략하면 null값이 자동으로 들어감.

insert into emp
values(310, 'Jark', 'Klein',
        'Klein@gmail.com', '010-378-1278', to_date('2024/05/17', 'YYYY/MM/DD'),
        'IT_PROG', 8000, null,
        120, 190);
        
insert into emp
values(320, 'Terry', 'Benard',
    'Benard@gmail.com', '010-245-3567', '2025/12/12',
    'AD_PRES', 5000, .2,
    100, 30);
    
commit;
-- commit하기 이전에 transaction이 진행중일때는 무결성유지를 위해 외부에서 접근및 조회가 불가능하다.

drop table sa_reps;

create table sa_reps(
rep_id number(6),
rep_name varchar2(25),
salary number(8,2),
commission_pct number(2,2));

insert all
    into sa_reps values(1, '최한석', 20000, .1)
    into sa_reps values(2, '한아름', 30000, .12)
select * from dual; -- A를 가져와서 복사해서 넣는건데 A가없으므로 dummy table사용

declare -- pl/sql
    base number(6) := 400;
begin
    for i in 1..10 loop
        insert into sa_reps(rep_id, rep_name, salary, commission_pct)
        values(base + 1, 'n' || (base + i), base + i, i * 0.01);
    end loop;
end;
/

select *
from sa_reps
where rep_id > 400;

commit;

select employee_id, salary, job_id
from emp
where employee_id = 300;

update emp
set job_id = 'IT_PROG',
    salary = 30000
where employee_id = 300; -- update문의 경우에는 where절을 잘써야지 사고가 안난다.

update emp
set salary = null
where employee_id = 300; -- select는 transaction과 관련이 없다.

rollback;

update emp
set job_id = (select job_id
                from employees
                where employee_id = 205),
    salary = (select salary
                from employees
                where employee_id = 205)
where employee_id = 300;

select job_id, salary
from emp
where employee_id = 300;

rollback;

update emp
set (job_id, salary) = (
    select job_id, salary
    from employees
    where employee_id = 205)
where employee_id = 300;

commit;

delete dept
where department_id = 310; --update, delete 모두 where절로 범위설정해주는게 중요하다.

select * from dept;

rollback;

delete emp
where department_id = (
    select department_id
    from departments
    where department_name = 'Purchasing');

select *
from emp;

commit;

