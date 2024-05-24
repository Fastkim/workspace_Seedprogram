-- view
-- hr user
drop view empvu80; -- 복습을 위한 코드

create view empvu80 as
    select employee_id, last_name, department_id
    from employees
    where department_id = 80;
    
desc empvu80

select * from empvu80;
-- table과 view의 차이점
-- view는 물리적으로 존재하지않는다, 즉 view 안에는 데이터가 없다.
-- table은 물리적으로 존재하는 객체. 즉 table 안에는 데이터가 있다.
-- view는 무결성과 보안때문에 사용한다.
-- tableName,userName과 마찬가지로 viewName도 해당스키마내에서 유일해야한다.


--select * from (select employee_id, last_name, department_id
--    from employees
--    where department_id = 80);  view의 내부구조

create or replace view empvu80 as -- view 구조 수정
    select employee_id, job_id
    from employees
    where department_id = 80;
    
desc empvu80

-- 과제: 50번 부서원들의 사번, 이름, 부서번호로 만든 DEPT50 view 를 만들어라.
--      view 구조는 EMPNO, EMPLOYEE, DEPTNO 이다.
create or replace view dept50(empno, employee, deptno) as
    select employee_id, last_name, department_id
    from employees
    where department_id = 50;
    
desc dept50
select * from dept50;
---

create or replace view dept50(empno, employee, deptno) as
    select employee_id, last_name, department_id
    from employees
    where department_id = 50
    with check option constraint dept50_ck;
    
drop table teams; -- 복습을 위한 코드
drop view team50; -- 복습을 위한 코드

create table teams as
    select department_id team_id, department_name team_name
    from hr.departments;
    
create view team50 as
    select *
    from teams
    where team_id = 50;

select * from team50;

select count(*) from teams;

insert into team50 -- view를 통해 원본테이블에 insert,delete하는것은 권장하지 않지만 가능함.
values(300, 'Marketing');

select count(*) from teams; -- view의 원본 테이블에 적용이됨.

create or replace view team50 as -- 50번의 팀에 대해서만 select,insert가 가능하도록
    select *
    from teams
    where team_id = 50
    with check option; -- 제약조건의 이름은 oralce이 자동으로 설정
    
insert into team50 values(50, 'IT Support');
select count(*) from teams;
insert into team50 values(301, 'IT Support'); -- 50번 team_id만 조회 수정이 가능

create or replace view empvu10(employee_num, employee_name, job_title) as
    select employee_id, last_name, job_id
    from employees
    where department_id = 10
    with read only; -- view를 통해 수정,삭제는 못하고 조회만 가능하도록 제약조건 설정
    
insert into empvu10 values(501, 'abel', 'Sales'); -- 에러
select * from empvu10;
---

drop sequence team_teamid_seq; -- 복습을 위한 코드

create sequence team_teamid_seq;

select team_teamid_seq.nextval from dual;
select team_teamid_seq.nextval from dual; -- nextval : 다음값
select team_teamid_seq.currval from dual; -- currval : 현재값

insert into teams
values(team_teamid_seq.nextval, 'Marketing');

select * from teams;

create sequence x_xid_seq -- 반복문
    start with 10 -- 시작값
    increment by 5 -- 증가값
    maxvalue 20 -- 끝값
    nocache -- 미리만들어놓지 않을거야.
    nocycle; -- 시작값으로 돌아가지않는다.

select x_xid_seq.nextval from dual;

-- 과제 : DEPT 테이블의 DEPARTMENT_ID 컬럼의 field value로 사용할 sequence를 만들어라.
--       sequence는 400이상, 1000 이하로 생성한다. 10씩 증가한다.
create sequence dept_departmentid_seq
    start with 400
    increment by 10
    maxvalue 1000
    nocache -- 기본값이므로 생략해도됨.
    nocycle; -- 기본값이므로 생략해도됨.

select dept_departmentid_seq.nextval from dual;

-- 과제: 위 sequence를 이용해서, DEPT 테이블에 Education 부서를 insert 하라.
insert into dept
values(dept_departmentid_seq.nextval, 'Education', '', '');

insert into dept(department_id, department_name)
values(dept_departmentid_seq.nextval, 'Education');

select * from dept;

commit;
---

-- 수많은 책꽂이에서 레코드인 책을 효율적으로 빠르게 찾으려면 index를 이용

drop index emp_lastname_idx; -- 복습을 위한 코드

create index emp_lastname_idx
on employees(last_name);

select last_name, rowid -- rowid 값은 oracle이 자동으로 넣어주고, DB안에서 유일하다.
from employees;

select last_name
from employees
where rowid = 'AAAEAbAAEAAAADOAAG'; -- 오라클 내부적으로는 각 row마다 할당된 고유의 ID로 찾는것이다.

select index_name, index_type, table_owner, table_name -- index 스키마 조회
from user_indexes;

-- where절에 자주쓰는 column을 index로 등록해놓으면 조회능력이 상승한다.
-- index를 생성하는건 dba이므로 개발자가 할필요는없다. index는 어떻게 하느냐에따라 다른쿼리에서는 조회성능을 하락시킬수도 있다.

-- 과제: DEPT 테이블의 DEPARTMENT_NAME 에 대해 INDEX를 만들어라.
create index dept_departmentname_idx
on dept(department_name);

select index_name, index_type, table_owner, table_name -- index 스키마 조회
from user_indexes;
---

drop synonym team; -- 객체에 별명을 붙인것을 synonym,  복습을 위한 코드

create synonym team
for departments; -- departments 테이블에 team이라는 별명을 붙인것이다.

select * from team;

-- 과제: EMPLOYEES 테이블에 EMPS SYNONYM을 만들어라.
create synonym emps
for employees;

select * from emps;