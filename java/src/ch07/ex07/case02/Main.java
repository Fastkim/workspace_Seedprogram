package ch07.ex07.case02;

public class Main {
	public static void main(String[] args) {
		Human human = () -> System.out.println("human say."); // 상속처럼 lambda로 Override해준것이다.
		human.say();
		//human.walk(); 객체.static method는 불가
		Human.walk(); // 타입.static method는 가능
		human.sleep(); // 객체.default method는 가능
	}
}
