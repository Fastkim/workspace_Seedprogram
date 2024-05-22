package ch06.service;

import java.util.List;

import ch06.dao.EmployeeDao;
//클래스명 작명할때 업무명 줄여서 사용하지말것.
import ch06.domain.Employee;

public class EmployeeServiceImpl implements EmployeeService {
	private EmployeeDao employeeDao;
	
	public EmployeeServiceImpl(EmployeeDao employeeDao) {
		this.employeeDao = employeeDao;
	}
	
	@Override
	public List<Employee> getEmployees(){
		return employeeDao.selectEmployees();
	}
}
