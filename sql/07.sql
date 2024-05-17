-- subquery
select last_name, salary
from employees
where salary > (select salary
                from employees
                where last_name = 'Abel');

select last_name, job_id, salary
from employees
where job_id = (select job_id
                from employees
                where last_name = 'Ernst')
and salary > (select salary
                from employees
                where last_name = 'Ernst');
                
-- where절에서의 서브쿼리는 한개의 로우(행)만 와야합니다.
-- 이유는 비교연산자(하나의 값을 기준으로 비교)를 사용했기때문이다.

-- 과제: IT부서에서 일하는 사원들의 부서번호, 이름, 직업을 조회하라.
select department_id, last_name, job_id
from employees
where department_id = (select department_id
                        from departments
                        where department_name = 'IT');
                        
-- 과제: Abel 과 같은 부서에서 일하는 동료들의 이름, 입사일을 조회하라.
--      이름으로 오름차순 정렬하라.
select last_name, hire_date
from employees
where department_id = (select department_id
                        from employees
                        where last_name = 'Abel')
and not last_name = 'Abel'
order by 1;

select last_name, salary
from employees
where salary > (select salary
                from employees
                where last_name = 'King'); -- king은 동명이인이 두명있으므로 >연산자로는 성립되지 않음(에러)

select last_name, job_id, salary
from employees
where salary = (select min(salary)
                from employees); -- 그룹function은 return 값이 하나이므로 사용가능

select department_id, min(salary)
from employees
group by department_id
having min(salary) > (select min(salary)
                        from employees
                        where department_id = 50); -- >,<,= 연산자에 따라서 서브쿼리의 return값이 한개이냐 n개이냐 생각해야함.

-- 과제: 회사 평균 월급 이상 버는 사원들의 사번, 이름, 월급을 조회하라.
--      월급 내림차순 정렬하라.
select employee_id, last_name, avg(salary)
from employees
group by employee_id, last_name
having avg(salary) >= (select avg(salary)
                        from employees)
order by 3 desc;

select employee_id, last_name, salary
from employees
where salary >= (select avg(salary)
                    from employees)
order by salary desc;

select employee_id, last_name
from employees
where salary in (select min(salary)
                from employees
                group by department_id);
                
-- 과제: 이름에 u가 포함된 사원이 있는 부서에서 일하는 사원들의 사번, 이름을 조회하라.
select employee_id, last_name
from employees
where department_id in (select department_id
                        from employees
                        where last_name like '%u%');
                        
-- 과제: 1700번 지역에 위치한 부서에서 일하는 사원들의 이름, 직업, 부서번호를 조회하라.            
select last_name, job_id, department_id
from employees
where department_id in (select department_id
                      from departments
                      where location_id = 1700);
                      
select employee_id, last_name
from employees
where salary = any (select min(salary) -- any : in하고 뜻이 같다, any는 단독으로 사용되지 않고 =(이퀄)처럼 다른연산자와 함께 쓰임.
                     from employees
                     group by department_id);
                     
select employee_id, last_name, job_id, salary
from employees
where salary <any (select salary -- 최대값 미만과 같은 개념
                    from employees -- any: or의 개념이다. 나열된 값 중 하나보다 작아야함.
                    where job_id = 'IT_PROG')
and job_id <> 'IT_PROG';    

select employee_id, last_name, job_id, salary
from employees
where salary <all (select salary -- 최소값 미만과 같은 개념
                    from employees -- all: and의 개념이다. 나열된 값 모두보다 작아야함.
                    where job_id = 'IT_PROG')
and job_id <> 'IT_PROG';

-- 과제: 60번 부서의 일부 사원보다 월급이 많은 사원들의 이름을 조회하라.
select last_name
from employees
where salary >any (select salary
                   from employees
                   where department_id = 60);
                   
-- 과제: 회사 평균 월급보다, 그리고 모든 프로그래머보다 월급을 더 받는
--      사원들의 이름, 직업, 월급을 조회하라.
select last_name, job_id, salary
from employees
where salary > (select avg(salary)
                from employees)
and salary >all (select salary
                 from employees
                 where job_id like 'IT%');

-- 조건실행(where절)결과 true가 나오는 값이 없기때문, 그 이유는 null연산은 null값만 산출되기 때문이다.
select last_name
from employees
where salary = (select salary
                from employees
                where employee_id = 1); -- 텅빈컬럼, 값으로 표현하면 null

select last_name
from employees
where salary in (select salary
                from employees
                where job_id = 'IT'); -- 테이블이 없는경우

select last_name, first_name, department_id, job_id
from employees
where employee_id in (select manager_id -- 테이블이 있지만 일부 필드가 null인 경우
                        from employees) -- 'King jenet'은 말단사원이고 매니저가 아니므로 null값이다.
order by last_name;
-- 매니저들의 값을 뽑아내는 쿼리

-- manager가 아닌 일반사원들
select last_name, first_name, department_id, job_id
from employees
where employee_id not in (select manager_id
                          from employees
                          where manager_id is not null)
order by last_name;

select last_name
from employees
where employee_id <>all (select manager_id
                        from employees
                        where manager_id is not null);
                        
select count(*)
from departments;

select count(*)
from departments d
where exists (select *
                from employees e
                where e.department_id = d.department_id);
-- 구성원들이 있는 부서를 뽑아내기
-- where절의 왼쪽 조건에 우측조건이 있는지 확인하고 true/false를 리턴

select count(*)
from departments d
where not exists (select *
                  from employees e
                  where e.department_id = d.department_id);
-- 구성원들이 없는 부서를 뽑아내기

-- 과제] 직업을 바꾼 적이 있는 사원들의 사번, 이름, 직업을 조회하라.
select employee_id, last_name, job_id
from employees e
where exists (select 1    -- 마땅한게 없다면 1 or *(아스테이크) 사용하면된다.
              from job_history j
              where j.employee_id = e.employee_id)
order by employee_id;

select employee_id, last_name, job_id
from employees e
where exists (select 1    -- 마땅한게 없다면 1 or *(아스테이크) 사용하면된다.
              from job_history j
              where j.department_id = e.department_id) -- 이건 job_history의 바뀐 부서가 있는지 확인하는 쿼리
order by employee_id;

select *
from job_history
order by employee_id;