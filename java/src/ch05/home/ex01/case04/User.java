package ch05.home.ex01.case04;

import java.time.LocalDate;

public class User {
	private String userName;
	private int age;
	private LocalDate regDate;
	
	// 지금은 business logic은 여기에 작성.
	
	public String getUserName() {
		return this.userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public int getAge() {
		return this.age;
	}
	
	public void setAge(int age) {
		this.age = age;
	}
	
	public LocalDate getRegDate() {
		return regDate;
	}
	
	public void setRegdate(LocalDate regDate) {
		this.regDate = regDate;
	}
}




