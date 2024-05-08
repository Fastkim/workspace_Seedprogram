package ch07.ex04.case05;

import java.util.Scanner;

public interface Console { // utility interface : 업무와 관련이 없는것들만 모아두는 인터페이스
	Scanner sc = new Scanner(System.in);
	
	static void info(Object obj) {
		System.out.println(obj);
	}
	
	public static void inMsg(String msg) {
		System.out.print(msg + ": ");
	}
	
	public static String inStr(String msg) {
		String input = "";
		boolean isGood = false;
		
		do {
			Console.inMsg(msg);
			input = sc.nextLine();
			isGood = input.matches("[a-bA-B가-힣]+"); // + 앞문자가 하나이상
			if(!isGood) Console.err("문자가 아닙니다.");
		} while(!isGood);
		
		return input;
	}
	
	static int inNum(String subjectName) {
		Boolean scoreRight = false;
		String input = "";
		do {
			System.out.print(subjectName + "\n> ");
			input = sc.nextLine().trim();
			scoreRight = input.matches("^[0-9][0-9]?"); // 점수가 0점이 나올수도 있어요.. 놀랍지만
			if(!scoreRight) Console.err("자연수가 아닙니다.\n"); // Console은 업무와 독립적으로이므로 점수가 아닙니다라는 메시지는 X
		} while(!scoreRight);
		
		return Integer.parseInt(input);
	}
	
	public static void err(String msg) {
		System.out.println("ERROR]" + msg);
	}
}
