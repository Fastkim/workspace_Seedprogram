package ch02.ex02;

import java.time.LocalDate;
import java.time.LocalTime;

public class C06Date {
	public static void main(String[] args) {
		LocalDate date = LocalDate.now(); // ctrl + shift + O : 자동 import
		LocalTime time = LocalTime.now();
		
		
		System.out.println(date); // 날짜
		System.out.println(time); // 시간
	}
}
