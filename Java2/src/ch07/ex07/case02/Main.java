package ch07.ex07.case02;

public class Main {
	public static void main(String[] args) {
		// Human 타입의 say라는 이름을 가진 메서드를 human 객체가 가지고있다.
		Human human = () -> System.out.println("human say."); // 상속처럼 lambda로 Override 해준것이다.
		human.say();
		//human.walk(); 객체.static method는 호출불가
		Human.walk(); // 타입.static method는 호출가능
		human.sleep(); // 객체.default method는 가능
	}
}
