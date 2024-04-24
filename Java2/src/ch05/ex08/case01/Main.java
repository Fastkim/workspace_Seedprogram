package ch05.ex08.case01;

public class Main {
	public static void main(String[] args) {
		Baby baby = new Baby();
		baby.setBabyName("초롱이"); // 아기가 태어난 이후에 아기이름을 붙여준것이다.
		
		new Baby("튼튼이"); // 객체가 태어나자마자 아기이름이 있는것이다.
	}
}
