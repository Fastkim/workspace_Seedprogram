-- 집합연산자
-- 칼럼의 개수가 일치해야하며, 데이터타입이 일치해야한다.
select employee_id, job_id
from employees
union -- 중복제거 (집합연산자는 중복제거하는것이 기본값)
select employee_id, job_id
from job_history;

select employee_id, job_id
from employees
union all -- 중복되는것 모두 표현, 2개가 늘어났는데: 과거에 가졌던 직업을 현재까지도 유지하는 사원이 2명이 있다.
select employee_id, job_id
from job_history;

-- 과제: 과거 직업을 현재 갇고 있는 사원들의 사번, 이름, 직업을 조회하라.
select employee_id, last_name, job_id
from employees e
where exists (select *
              from job_history j
              where e.employee_id = j.employee_id -- 여기까지만 하면 직업을 변경한 적이 있었던 사원을 뽑아내는것.
              and e.job_id = j.job_id); -- 여기까지 해야 과거직업을 현재까지도 가지고있는 직원 축출.

select employee_id, last_name, job_id
from employees e
where e.job_id in (select job_id
                   from job_history j
                   where e.employee_id = j.employee_id);
                   
                   
                   