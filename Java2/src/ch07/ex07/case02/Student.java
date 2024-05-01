package ch07.ex07.case02;

public class Student implements Human {
	@Override
	public void say() {
		System.out.println("Student say"); // Human interface의 say 추상메서드를 구현했다.
	}
}
