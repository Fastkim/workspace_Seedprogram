-- 집합연산자
-- 칼럼의 개수가 일치해야하며, 데이터타입이 일치해야한다.
select employee_id, job_id
from employees
union -- 중복제거 (집합연산자는 중복제거하는것이 기본값)
select employee_id, job_id
from job_history;

select employee_id, job_id
from employees
union all -- 중복되는것 모두 표현
select employee_id, job_id
from job_history;

-- 과제: 과거 직업을 현재 갖고 있는 사원들의 사번, 이름, 직업을 조회하라.
select employee_id, last_name, job_id
from employees e
where exists (select *
            from job_history j
             where e.employee_id = j.employee_id -- 여기까지만 하면 직업을 변경한적이 있었던 사원을 축출해내는것.
                and e.job_id = j.job_id); -- 여기까지 해야 과거직업을 현재까지도 가지고있는 직원 축출

select employee_id, last_name, job_id
from employees e
where e.job_id in (select job_id
                   from job_history j
                   where e.employee_id = j.employee_id);
                   
select employee_id, job_id
from employees
intersect -- 교집합
select employee_id, job_id
from job_history;

select employee_id, job_id
from employees
minus -- 차집합
select employee_id, job_id
from job_history;

-- 서로 다른칼럼이지만 데이터타입이 일치하기때문에 합칠수 있다.
select location_id, department_name
from departments
union
select location_id, state_province
from locations;

-- 과제, 위 쿼리를 업무에 쓸 수 있게 고쳐라.
--      union을 사용하라.
select location_id, department_name, null state
from departments
union
select location_id, null, state_province
from locations;

select employee_id, job_id, salary
from employees
union
select employee_id, job_id
from job_history;

-- 과제] 위 query를 기술 관점에서 고쳐라.
--      null은 쓰지 마라.
select employee_id, job_id, salary
from employees
union
select employee_id, job_id, 0
from job_history;