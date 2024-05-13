package com.my.hr.domain;

import java.time.LocalDate;

//record는 보일러플레이트 코드를 줄이고 코드의 간결화를 위해 등장했다.
public record Laborer(int laborerId, String laborerName, LocalDate hireDate) {
	@Override
	public String toString() {
		return String.format("%2d %5s %s", laborerId, laborerName, hireDate);
	}
}
