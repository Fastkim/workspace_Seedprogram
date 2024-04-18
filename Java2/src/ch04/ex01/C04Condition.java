package ch04.ex01;

public class C04Condition {
	public static void main(String[] args) {
		int a = 3;
		if(0 < a && a < 4) System.out.println("good."); // 0 < a < 4 : a가 0 과 4 사이에 있다는 의미의 가독성이 좋은코드
		
		// 과제: b값이 'a'초과 'c'미만 범위이면, Good을 출력하라.
		char b = 'b';
		if('a' < b && b < 'c') System.out.println("Good.");
		
		int x = 0;
		int y = 0;
		if((x = 1 + 2) > 0 || (y = 1 - 2) > 0) // 빠른OR은 앞에서 True가 나왔으므로 뒤 피연산자는 연산하지 않음
			System.out.printf("x: %d, y: %d\n", x, y);
		
		String s = "he";
		if(s.equals("He")) // equals 는 물리적인 값을 비교한다.
			System.out.println("he");
		
		// 과제: s의 논리적인 의미가 'he'이면 'he'를 출력하라.
		if(s.equalsIgnoreCase("He"))
			System.out.println("he");
		
		s = "";
		if(!s.equals("")) System.out.println("값이 있다.");
		
		boolean power = false;
		if(!power) System.out.println("전원을 켜다.");
		
	}
}
