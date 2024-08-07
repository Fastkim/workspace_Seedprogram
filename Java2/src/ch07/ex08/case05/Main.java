package ch07.ex08.case05;

public class Main {
	public static void main(String[] args) {
		LamdaDog lamdaDog1 = Dog::print; // method reference 표현식 static method는 Colon을 사용해서 표현 할 수 있다.
		LamdaDog lamdaDog2 = (dogName, age) ->
			System.out.printf("내 강아지 %s는 %d살입니다.", dogName, age); // lambda 표현식
			
		lamdaDog1.print("walwali", 2);
		lamdaDog2.print("콩콩이", 3);
	}
}
