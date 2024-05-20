--hr user
drop table hire_dates;

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
where tname not like 'BIN%'; -- 쓰레기 빼고 테이블이름 보여주기.

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
grant connect, resource to you; -- create session은 connect와 resource에 있다.

-- you user