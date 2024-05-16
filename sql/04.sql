select hire_date
from employees
where hire_date = '2003/06/17'; -- 우측의 'character'를 date타입으로 변환하여 비교하는게 더 효율적

select salary
from employees
where salary = '7000'; -- character를 number타입으로 변환

select hire_date || '' -- || 붙이기연산자를 통해 날짜를 캐릭터로 변환
from employees;

select salary || '' -- number <-> character <-> date : 4가지의 경우
from employees;  -- auto-casting

select to_char(hire_date) -- api-casting
from employees;

select to_char(sysdate, 'yyyy-mm-dd') -- (대상,포맷(생략될경우 기본값))
from dual;

select to_char(sysdate, 'YEAR month ddsp day(DY)')
from dual;

select to_char(sysdate, 'd')
from dual;

select last_name, hire_date,
    to_char(hire_date, 'day'), -- 요일을 문자열형태로
    to_char(hire_date, 'd') -- 요일을 인덱스형태로
from employees;

-- 과제: 월요일부터 입사일순 오름차순 정렬하라.
select last_name, hire_date,
    to_char(hire_date, 'day') day,
    replace(to_char(hire_date, 'd') - 1, 0, 7) kday
from employees
order by kday;

select last_name, hire_date,
    to_char(hire_date, 'day') day
from employees
order by to_char(hire_date -1, 'd');

select to_char(sysdate, 'hh24:mi:ss am')
from dual;

select to_char(sysdate, 'DD "of" Month')
from dual;

select to_char(hire_date, 'fmDD Month YY') -- fill mode(꾹꾹 눌러담다)
from employees;

-- 과제: 사원들의 이름, 입사일, 인사평가일을 조회하라.
--      인사평가일은 입사한 지 3개월 후 첫번째 월요일이다.
--      날짜는 YYYY.MM.DD 로 표시하라.
select last_name, hire_date, 
    to_char(hire_date, 'day') day, 
    to_char(ADD_MONTHS(hire_date, 3), 'YYYY.MM.DD') 인사평가일
from employees
where to_char(hire_date, 'd') = 2; 

select last_name, to_char(hire_date, 'YYYY.MM.DD') hire_date,
    to_char(next_day(add_months(hire_date, 3), 'monday'), 'YYYY.MM.DD') review_date
from employees;

select to_char(salary)
from employees;

select to_char(salary, '$99,999.99'), -- 정수자리에 빈자리는 버림
    to_char(salary, '$00,000.00') -- 정수자리에 빈자리에 0을 채움
from employees
where last_name = 'Ernst';

select '|' || to_char(12.12, '9999.999') || '|',
    '|' || to_char(12.12, '0000.000') || '|'
from dual;

select '|' || to_char(12.12, 'fm9999.999') || '|',
    '|' || to_char(12.12, 'fm0000.000') || '|'
from dual;

select to_char(1237, 'L9999')
from dual;

-- 과제: <이름> earns <$월급> monthly but wants <$월급x3> 꺽새는 변수출력하려고 넣은거.
select last_name || ' earns ' || trim(to_char(salary, '$99999'))
    || ' monthly but wants ' || trim(to_char(salary * 3, '$99999')) 문자열
from employees;

select last_name || ' earns ' ||
    to_char(salary, 'fm$99,999') || ' monthly but wants ' ||
    to_char(salary * 3, 'fm$99,999') || '.' 문자열
from employees;

select last_name, hire_date
from employees
where hire_date = to_date('Sep 21, 2005','Mon dd, yyyy');

select last_name, hire_date
from employees
where hire_date = to_date('Sep 21, 2005', 'Mon  dd yy');

select last_name, hire_date
from employees
where hire_date = to_date('Sep 21, 2005', 'fxMon dd, yy'); -- format extract(fx) : format이 정확히 일치해야한다.

select to_number('1237')
from dual;

select to_number('1,237.12') -- 소수점은 포맷을 명시해줘야한다.
from dual;

select to_number('1,237.12', '9,999.99')
from dual;

select nvl(null, 0) -- nvl(null일경우, 값출력)
from dual;

select job_id, nvl(commission_pct, 0) 
from employees;
-- nvl의 return값이 하나의 칼럼을 구성하기때문에 같은칼럼의 데이터의 타입은 동일하다.
-- 그러므로 첫번째,두번째 칼럼의 데이터 타입이 동일해야한다.

-- 과제] 사원들의 이름, 직업, 연봉(커미션 포함)을 조회하라.
select last_name, job_id, salary * 12 *(1 + nvl(commission_pct, 0)) ann_sal
from employees
order by ann_sal desc;

-- 과제: 사원들의 이름, 커미션율을 조회하라.
--      커미션이 없으면, No Commission을 출력하라.
select last_name, replace(nvl(commission_pct, 0),0,'No Commission') noMoney
from employees
order by noMoney;

select last_name, nvl(to_char(commission_pct), 'No Commission')
from employees;

-- nvl(파라미터1,파라미터2): 파라미터1,파라미터2가 데이터타입이 동일하고 칼럼을 구성
-- nv12(대상,파라미터1,파라미터2): 파라미터1,파라미터2가 데이터타입이 동일하고 칼럼을 구성
select job_id, nvl2(commission_pct, 'SAL+COMM', 'SAL') income
from employees;

select job_id, nvl2(commission_pct, 'SAL+COMM', 0) income -- number 0을 캐릭터로 auto-casting했다.
from employees;

select first_name, last_name,
    nullif(length(first_name), length(last_name)) -- 파라미터 1,2 가 동일하면 null return, 다르면 첫번째 파라미터 return
from employees;

-- null은 카멜리온이기때문에 형변환이 자유롭다. 어떤값이든 null이 끼어들수있음.
select to_char(null), to_number(null), to_date(null) 
from dual;

-- 파라미터를 n개를 나열해서 앞에서부터 살펴봐서 null이 아니면 해당 파라미터를 return하고 종료
select last_name, job_id,
    coalesce(to_char(commission_pct), to_char(manager_id), 'None') 
from employees;

select last_name, salary,
    decode(trunc(salary/2000),
        0, 0.00,
        1, 0.09,
        2, 0.20,
        3, 0.30,
        5, 0.42,
        6, 0.44,
            0.45) tax_rate -- 0.45는 위의 조건이 모두다 false일경우 수행하는 기본값
from employees
where department_id = 80;

select decode(salary, 'a', 1) --decode function에서 기본값은 null
from employees;

select decode(salary, 'a', 1, 0) -- decode(대상,비교값,일치할때 출력할값,기본값)
from employees;

select decode(job_id, 1, 1) -- 1을 auto-casting해도 일치시킬수가 없으므로 에러
from employees;

select decode(hire_date, 'a', 1)
from employees;

-- 과제: 사원들의 직업, 직업별 등급을 조회하라.
--      기본 등급은 null 이다.
--      IT_PROG A
--      AD_PRES B
--      ST_MAN  C
--      ST_CLERK D
select job_id, 
    decode(job_id,
        'IT_PROG', 'A',
        'AD_PRES', 'B',
        'ST_MAN', 'C',
        'ST_CLERK', 'D') job_grade
from employees
order by job_grade;

select last_name, job_id, salary,
    case job_id when 'IT_PROG' then 1.10 * salary
                when 'AD_PRES' then 1.05 * salary
    else salary end revised_salary
from employees;

-- decode function을 case문법으로 표현가능
select case job_id when '1' then 1 -- return 값의 표현(then,else)은 데이터타입이 동일해야함.
                    when '2' then 2
                    else 0
       end grade
from employees;

select case salary when 1 then '1' -- when은 기준값 salary와 데이터타입이 일치해야함.
                    when 2 then '2'
                    else '0'
        end grade
from employees;

-- =(이퀄) 개념이 아닌 다른연산자를 사용할때
-- case문법을 쓰면 그나마 query에다가 logic을 표현할수있음.
select last_name, salary,
    case when salary < 5000 then 'low'
        when salary < 10000 then 'medium'
        when salary < 20000 then 'high'
        else 'good'
    end grade
from employees;

select to_char(hire_date,'d')
from employees;

-- 과제: 사원들의 이름, 입사일, 입사요일을 월요일부터 요일순으로 조회하라.
select last_name, to_char(hire_date,'day'),
    case trim(to_char(hire_date,'day')) when 'monday' then 1
                                        when 'tuesday' then 2
                                        when 'wednesday' then 3
                                        when 'thursday' then 4
                                        when 'friday' then 5
                                        when 'saturday' then 6
                                        when 'sunday' then 7
    end day
from employees
order by day;

select last_name, hire_date, to_char(hire_date, 'fmday') day
from employees
order by case day
    when 'monday' then 1
    when 'tuesday' then 2
    when 'wednesday' then 3
    when 'thursday' then 4
    when 'friday' then 5
    when 'saturday' then 6
    when 'sunday' then 7
end;

select last_name, hire_date,
    case when hire_date <= '2005/12/31' then '100만원'
    else '10만원' end gift
from employees
order by gift, hire_date;

