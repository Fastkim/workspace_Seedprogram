package ch05.ex06.case01;

public class Main {
	public static void main(String[] args) {
		Man.say("I love java.");
		//Man.tell("");
		
		Man man = new Man();
		man.tell("I love java");
		man.say("hello"); // static method 호출도 가능, 절차지향일때 static method로 표현하기에 좋다.
	}
}
