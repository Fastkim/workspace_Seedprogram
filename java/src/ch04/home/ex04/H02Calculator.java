package ch04.home.ex04;

import java.util.Scanner;

public class H02Calculator {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = 0;
		int b = 0;
		String op = "";
		int result = 0;
		
		String tmp = "";
		boolean isGood = false;
		String errMsg = "input 0 or natural number.";
		
		do {
			do { // a 의 조건
				isGood = false;  // isGood을 청소 -> 초기화를 해준다.
				System.out.print("a: "); tmp = sc.nextLine(); //tmp는 임시variable
				isGood = tmp.matches("[0-9]+"); //값의 범위(-) 0에서 9까지의 값만 들어올 수 있으면 true를 return, 자리수 -> * : 값이 0개 이상, + : 값이 1개 이상
				if(isGood) a = Integer.parseInt(tmp);
				else System.out.println(errMsg);
			} while(!isGood);
			
			do { // op 의 조건
				isGood = false; // 청소 두개재
				System.out.print("op: "); op = sc.nextLine();
				// 문자한개한개씩 비교해본다, *은 matches에서 0개 이상이라는 의미의 특수문자로 사용중, 따라서 일반문자로 바꾸기위해 \\를 앞에 사용
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
