drop table hire_dates;

create table hire_dates(
emp_id number(8), -- emp_id default값은 null
hire_date date default sysdate); -- date default값은 sysdate

select tname
from tab; -- hr스키마(테이블의 집합)에 있는 테이블을 보여준다.
-- data dictionary : 오라클 시스템이 가지고있는 자체적인 메타데이터를 말한다.

-- 쓰레기 테이블은 BIN으로 시작함.
-- delete table 했을때 쓰레기통에 BIN%이름으로 저장되고 commit했을때 적용된다.
select tname
from tab
where tname not like 'BIN%';