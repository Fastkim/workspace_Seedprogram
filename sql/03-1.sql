-- dual : dummy table
desc dual
select * from dual;

select lower('SQL Course')
from dual; -- 이럴때 dummy table을 사용

select upper('sQl course ')
from dual;

select initcap('SQL course') -- single record가 하나 들어갔기 때문에 single function, single record는 return값이 record 하나.
from dual;

select last_name
from employees
where last_name = 'higgins';

select last_name
from employees
where last_name = 'Higgins'; -- 데이터는 대소문자를 구부한다.

select last_name
from employees
where lower(last_name) = 'higgins'; -- lower() return값 = 'higgins';

select concat('Hello', 'World') -- 들어간 레코드는 한개, 필드는 2개
from dual;

select substr('HelloWorld', 2, 5) --substr(대상, index, length), sql에서는 index가 1부터 시작
from dual;

select substr('Hello', -1, 1)
from dual;

select length('Hello')
from dual;

select instr('Hello', 'l') -- 해당문자가 처음등장한 index를 산출, 없으면 0 반환
from dual;
select instr('Hello', 'z')
from dual;

select lpad(salary, 5, '*') -- 5자리로 맞춰서 출력하되, 빈공간은 *로 왼쪽부터 채우겠다.
from employees;
select rpad(salary, 5, '*')
from employees;

select replace('JACK and JUE', 'J', 'BL')
from dual;

select trim('H' from 'Hello')
from dual;
select trim('l' from 'Hello')
from dual;
select trim(' ' from ' Hello ') -- trim은 머리와 꼬리의 해당 문자를 삭제
from dual;
select trim(' hello ') -- default값은 공백제거
from dual;

-- 과제: 위 query에서 ' '가 trim됐음을, 눈으로 확인할 수 있게 조회하라.
select '|' ||trim(' ' from ' Hello ')|| '|'
from dual;

select trim(' Hello world ')
from dual;

-- select clause(구역)에서만 single function을 사용했었다.
select employee_id, concat(first_name, last_name) name,
    job_id, length(last_name), instr(last_name, 'a') "Contains 'a'?"
from employees
where job_id like '%PROG%';

-- 과제: 이름이 J나 A나 M으로 시작하는 사원들의 이름, 이름의 글자수를 조회하라.
--      이름은 첫글자는 대문자, 나머지는 소문자로 출력하라.
select substr(last_name, 1, 1) || substr(last_name, 2) last_name, length(last_name)
from employees
where last_name like 'J%' or last_name like 'A%' or last_name like 'M%';

select initcap(last_name), length(last_name)
from employees
where last_name like 'J%' or
    last_name like 'A%' or
    last_name like 'M%';
    
select round(45.926, 2) -- 두번째 자리까지 반올림하여 산출
from dual;
select trunc(45.926, 2) -- 두번째 자리까지 버림하여 산출
from dual;

-- 과제: 사원들의 이름, 월급, 15.5% 인상된 월급(New Salary, 정수), 인상액(Increase)을 조회하라.
select last_name,salary, round(salary + salary * (15.5 * 0.01)) "인상액(Increase)"
from employees;

select last_name, salary,
    round(salary * 1.155) "New Salary",
    round(salary * 1.155) - salary "Increase"
from employees;

-- call 시점의 날짜를 출력, 날짜를 캐릭터타입으로 바꿀때 client(sql develop) 환경설정의 형식대로 날짜가 출력
select sysdate -- sysdate는 현업에서 가장많이 사용함.
from dual;

select sysdate + 1
from dual;

select sysdate - 1
from dual;

select sysdate - sysdate
from dual;

select last_name, sysdate - hire_date
from employees
where department_id = 90;

-- 과제: 90번 부서원들의 이름, 근속년수를 조회하라.
select last_name, trunc((sysdate - hire_date) / 365) 근속년수
from employees
where department_id = 90;

select months_between('2022/12/31', '2021/12/31') -- 개월 수 구하기
from dual;

select add_months('2022/07/14', 1) -- (대상날짜, 더하기할값)
from dual;

select next_day('2024/05/16', 5) -- 일,월,화,수,목(5), 본인을 제외한 후의 목요일
from dual;

select next_day('2024/05/16', 'thusday')
from dual;

select next_day('2024/05/16', 'thu')
from dual;

select last_day(sysdate) 
from dual;
