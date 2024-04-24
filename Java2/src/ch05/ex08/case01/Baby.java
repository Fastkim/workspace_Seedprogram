package ch05.ex08.case01;

public class Baby {
	private String babyName;
	
	public Baby() {} // 생성자(constructor)
	
	public Baby(String babyName) { // 생성자 overroading
		this.babyName = babyName; 
	}
	
	public void setBabyName(String babyName) {
		this.babyName = babyName;
	}
}
