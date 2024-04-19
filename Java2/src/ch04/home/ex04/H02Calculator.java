package ch04.home.ex04;

import java.util.Scanner;

public class H02Calculator {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = 0;
		int b = 0;
		String op = "";
		int result = 0;
		String tmp = ""; // 임시 변수
		boolean isGood = false; // flag
		String errMsg = "input 0 or natural number.";
		
		do {
			do { // a 의 조건
				isGood = false; // isGood을 청소 - > 초기화 해준다.
				System.out.print("a: "); tmp = sc.nextLine(); // tmp는 임시variable
				isGood = tmp.matches("[0-9]+"); // 0에서 9까지의 값만 들어올 수 있으면 true를 return, 자리수 -> * : 값이 0개 이상, + : 값이 1개 이상
				if(isGood) a = Integer.parseInt(tmp);
				else System.out.println(errMsg);
			} while(!isGood);
					
			do { // op 의 조건
				isGood = false; // 청소 두개재
				System.out.print("op: "); op = sc.nextLine();
				isGood = op.matches("[+-/\\*]");
				if(!isGood) System.out.println("input one of them(+, -, *, /)");
			} while(!isGood);
			
			do { // b 의 조건
				isGood = false; // 청소 두개재
				System.out.print("b: "); tmp = sc.nextLine();
				isGood = tmp.matches("[0-9]+");
				if(isGood) b = Integer.parseInt(tmp);
				else System.out.println(errMsg);
			} while(!isGood);
			
			result = switch(op) {
			case "+" -> a + b;
			case "-" -> a - b;
			case "*" -> a * b;
			default -> a / b;
			};
			
			System.out.printf("%d %s %d = %d\n", a, op, b, result);
			System.out.print("continue(y/n)? ");
		} while(sc.nextLine().equalsIgnoreCase("y"));
		
		System.out.println("end.");
	}
}
/*
과제: 계산기를 만들어라.
입력값 a, b는 0 또는 자연수이다.
연산자 op +, -, *, / 이다.
/ 는 몫만을 구한다.

continue(y/n)? 에서 y 또는 Y를 입력하면 계산 작업을 재수행한다.
y 또는 Y 외를 입력하면 앱을 종료한다.
--

a: 1
op: *
b: 2
1 * 2 = 2
continue(y/n)? 
end.
 */

