select employee_id, last_name, department_id
from employees
where department_id = 90; -- 현장에서 관건은 where, where에서는 select에서 조회된 column만 올 수 있다.

-- 과제: 176번 사원의 사번, 이름, 부서번호를 조회하라.
select employee_id, last_name, department_id
from employees
where employee_id = 176;

select employee_id, last_name, department_id
from employees
where last_name = 'Whalen';

select employee_id, last_name, hire_date
from employees
where hire_date = '2008/02/06'; 
-- hire_date의 타입이 date이므로 oracle이 캐릭터타입을 date타입으로 auto-casting한다.
-- 캐릭터타입을 날짜타입으로 oracle이 parsing할때 어떤형식으로 읽을지 설정하는방법은 아래.
-- 도구 -> 환경설정 -> database -> NLS -> DATE FORMAT 설정.

select last_name, salary
from employees
where salary <= 3000;

-- 과제: 월 $12,000 이상 버는 사원들의 이름, 월급을 조회하라.
select last_name, salary
from employees
where salary >= 12000;

select last_name, job_id
from employees
where job_id != 'IT_PROG'; -- != 같지않다.

select last_name, salary
from employees
where salary between 2500 and 3500; -- 범위의 시작값,끝값 포함 (이상,이하)

select last_name
from employees
where last_name between 'King' and 'Smith'; -- 알파벳순서 범위로 parsing

-- 과제: 'King' 사원의 first name, last name, 직업, 월급을 조회하라.
select first_name, last_name, job_id, salary
from employees
where last_name = 'King';

select last_name, hire_date
from employees
where hire_date between '2002/01/01' and '2002/12/31';

select employee_id, last_name, manager_id
from employees
where manager_id in (100, 101, 201);

select employee_id, last_name, manager_id
from employees
where manager_id = 100 or
    manager_id = 101 or
    manager_id = 201;

select employee_id, last_name
from employees
where last_name in ('Hartstein', 'Vargas');

select last_name, hire_date
from employees
where hire_date in ('2003/06/17', '2005/09/21');

select last_name
from employees
where last_name like 'S%';

-- 과제] 2005년에 입사한 사원들의 이름, 입사일을 조회하라.
select last_name, hire_date
from employees
where hire_date like '2005%';

select last_name
from employees
where last_name like '%r';

-- 과제: 이름에 s가 포함된 사원들의 이름을 조회하라.
select last_name
from employees
where last_name like '%s%';

select last_name
from employees
where last_name like 'K___';

-- 과제: 이름의 두번째 글자가 o인 사원의 이름을 조회하라.
select last_name
from employees
where last_name like '_o%';

select job_id
from employees;

select last_name, job_id
from employees
where job_id like 'I_\_%' escape '\'; -- \(백슬레시) : escape 문자, 특수문자앞에 써서 일반문자로 만들어줌.

select last_name, job_id
from employees
where job_id like 'I_{_%' escape '{'; -- 어떤 문자이던지 escape로 등록해서 사용가능

-- 과제: 직업에 _R이 포함된 사원들의 이름, 직업을 조회하라.
select last_name, job_id
from employees
where job_id like '%\_R%' escape '\';

select employee_id, last_name, manager_id
from employees
where manager_id = null; -- expression(=,+,-,*,/)에 null이 포함되면 null을 return한다.