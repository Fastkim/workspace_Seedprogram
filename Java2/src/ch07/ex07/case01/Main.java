package ch07.ex07.case01;

public class Main {
	public static void main(String[] args) {
		// Human 타입의 메서드이며, 메서드의 이름은 human interface내에 있는 say이다.
		// java script arrow function 과 구조가 비슷함.
		Human human = () -> System.out.println("hello"); // (파라미터) -> {메서드 블록}, 메서드를 데이터취급한다.
		human.say();
	}
}
