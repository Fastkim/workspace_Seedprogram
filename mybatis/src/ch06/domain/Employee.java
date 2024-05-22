package ch06.domain;

import java.time.LocalDate;

public class Employee { // 도메인이름은 단수형, 테이블이름은 복수형
	private int employeeId;
	private String lastName;
	private LocalDate hireDate;
	
	@Override
	public String toString() {
		return String.format("%d %s %s", employeeId, lastName, hireDate);
	}
}
