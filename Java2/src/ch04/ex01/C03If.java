package ch04.ex01;

public class C03If {
	public static void main(String[] args) {
		int hour = 25;
		
		if(hour < 12)
			System.out.println("Good Morning."); // 출력이 종점이다.
		else if(hour < 18)
			System.out.println("Good Afternoon"); // 출력
		else if(hour < 21)
			System.out.println("Good Evening"); // 출력
		else
			System.out.println("Good Night."); // 출력
		// 종점이 4개
		
		hour = 20;
		String bow = "";
		if(hour < 12) bow = "Good Morning.";
		else if(hour < 18) bow = "Good Afternoon";
		else if(hour < 21) bow = "Good Evening";
		else bow = "Good Night";
		System.out.println(bow); // 출력 종점하나
	}
}
