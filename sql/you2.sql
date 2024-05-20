select tname
from tab;

drop table depts; -- 복습을 위한 코드

create table depts( -- table에 종속적인 객체 constraint(제약조건), -- 모든 테이블에는 primary key가 있어야한다.
department_id number(3) constraint depts_deptid_pk primary key,
department_name varchar2(20));

desc user_constraints

select constraint_name, constraint_type, table_name
from user_constraints;

create table emps( -- constraint를 생략하면 oracle이 자동으로 부여해주지만, 유지보수 하기는 힘듬.
employee_id number(3) primary key, -- primary key : not null + unique 특성
emp_name varchar2(10) constraint emps_empname_nn not null, -- 중복값은 ok, null은 안돼
email varchar2(20), -- 20byte (한글로는 10byte라고 생각)
salary number(6) constraint emps_sal_ck check(salary > 1000),  --check : 데이터가 참이냐 거짓이냐를 나누는 기준(업무관점)
department_id number(3),
-- constraint만 따로 부여할때는 위에서 이미 칼럼이 설정되어있어야한다.
constraint emps_email_uk unique(email), -- unique : 중복안돼, 칼럼과 떨어져서 제약조건을 설정할때는 제약조건괄호로 칼럼지정
constraint emps_deptid_fk foreign key(department_id)
    references depts(department_id)); -- emps table에 department_id라는 칼럼이 이미 생성되어있어야 copy가 가능하다.
    
select constraint_name, constraint_type, table_name
from user_constraints; -- you user의 테이블들의 domain을 조회하는 명령문

insert into depts
values(100, 'Development');

insert into emps
values(500, 'musk', 'musk@gmail.com', 5000, 100);

-- DDL은 auto commit이다.
commit;

-- 일관성 : 어느때는 참이고 어느때는 거짓인 특성
-- 무결성

delete depts; -- 에러발생, 부모테이블(depts)와 자식테이블(emps)의 관계로 인해 삭제할수없다, 무결성 유지
-- 제약조건의 생성이유 : 무결성을 유지하기위해서, 거짓된 데이터를 차단하기위해서이다.
-- 자식테이블(emps)을 삭제하고 부모테이블(depts)을 삭제해야한다.

insert into depts values(100, 'Marketing'); -- 에러 : 이미 pk값으로 100이 존재하므로 unique 제약조건 위배
insert into depts values(null, 'Marketing'); -- 에러 : pk는 not null이다.
insert into emps values(501, null, 'good@gmail.com', 6000, 100); -- 2번째 컬럼의 not null 제약조건 위배
insert into emps values(501, 'label', 'musk@gmail.com', 6000, 100); -- email 칼럼의 unique 제약조건 위배
insert into emps values(501, 'abel', 'good@gmail.com', 6000, 200); -- 부모,자식 테이블 관계 위배, dept테이블에 department_id에 200번은 없다.

drop table emps cascade constraints; -- 부모,자식 테이블의 모든 제약조건 삭제

select constraint_name, constraint_type, table_name
from user_constraints;

select *
from hr.employees; -- 다른스키마로 접근하는 방법. 권한을 안받았으므로 접근은 불가

-- system user
grant all on hr.departments to you; -- you라는 유저는 hr.departments 테이블의 모든 권한을 받음.

-- you user
select * from hr.departments; -- 접근가능
select * from hr.employees; -- 접근불가능(권한 부여 안함)

drop table employees cascade constraints; -- 복습을 위한 코드

create table employees(
employee_id number(6) constraint emp_empid_pk primary key,
frist_name varchar2(20),
last_name varchar2(25) constraint emp_lastname_nn not null,
email varchar2(25) constraint emp_email_nn not null
                    constraint emp_email_uk unique, -- primary key와 성질은 같지만, primary key는 아니다.
phone_number varchar2(20),
hire_date date constraint emp_hiredate_nn not null,
job_id varchar2(10) constraint emp_jobid_nn not null,
salary number(8) constraint emp_salary_ck check(salary > 0),
commission_pct number(2, 2), -- commission 값은 1미만의 값이 올수있다, 소수점 두자리
-- foreign key 이름은 생략가능하지만 reference는 생략 불가능
manager_id number(6) constraint emp_managerid_fk references employees(employee_id), -- self 참조
department_id number(4) constraint emp_dept_fk references hr.departments(department_id));

commit;