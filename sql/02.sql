select employee_id, last_name, department_id
from employees
where department_id = 90; -- 현장에서 관건은 where, where에서는 select에서 조회된 column만 올수 있다.

-- 과제: 176번 사원의 사번, 이름, 부서번호를 조회하라.
select employee_id, last_name, department_id
from employees
where employee_id = 176;

select employee_id, last_name, department_id
from employees
where last_name = 'Whalen';

select employee_id, last_name, hire_date
from employees
where hire_date = '2008/02/06'; -- hire_date의 타입이 date이므로 oracle이 char타입을 date타입으로 알아서 바꿔준다.
-- 도구 - 환경설정 - database - NLS - DATE FORMAT 설정

select last_name, salary
from employees
where salary <= 3000;

-- 과제: 월 $12,000 이상 버는 사원들의 이름, 월급을 조회하라.
select last_name, salary
from employees
where salary >= 12000;
