desc dual -- dummy table
select * from dual;

select lower('SQL Course')
from dual; -- 이럴때 dummy table을 사용

select upper('sQl course ')
from dual;

select initcap('SQL course') -- single record가 하나 들어갔기때문에 single function, single record는 return 값이 record 하나.
from dual;

select last_name
from employees
where last_name = 'higgins';

select last_name
from employees
where last_name = 'Higgins'; -- 데이터는 대소문자 구분한다.

select last_name
from employees
where lower(last_name) = 'higgins'; -- lower() return값 = 'higgins';

select concat('Hello', 'World') -- 들어간 레코드는 한개, 필드는 2개
from dual;

select substr('HelloWorld', 2, 5) --substr(대상, index, length)
from dual;

select substr('Hello', -1, 1)
from dual;