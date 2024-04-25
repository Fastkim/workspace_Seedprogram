package ch05.home.ex06.case02;

import java.util.Scanner;

public class Console {
	private static Scanner sc;
	private static Boolean isValid;
	
	static { // static variable을 초기화하고 싶을때는 static 블록으로 함.(바이트 코드 생성때 초기화)
		sc = new Scanner(System.in);
	}
	
	private static void inMsg(String msg) {
		System.out.print(msg + "\n> ");
	}
	
	public static String inStr(String msg) {
		isValid = false;
		String tmp = "";
		
		do {
			Console.inMsg(msg);
			tmp = sc.nextLine().trim();
			isValid = tmp.matches("[a-zA-Z가-힣]+");
			if(!isValid) Console.err("문자가 아닙니다."); // print method를 만드는 이유는 가독성을 위해서이다.
		} while(!isValid);
		return tmp;
	}
	
	public static int inNum(String msg) {
		isValid = false;
		String tmp = "";
		
		do {
			Console.inMsg(msg);
			tmp = sc.nextLine().trim();
			isValid = tmp.matches("^[1-9][0-9]"); 
			// "^[1-9][0-9]*" : 두자리숫자를 표현할때에 시작하는 첫번째 자리는 ^[1-9], ^ : 시작하는 숫자라는 의미
			// 두번째 자리는 [0-9]* 두번째자리는 0개 있어도 되므로 *
			if(!isValid) Console.err("자연수가 아닙니다.");
		} while(!isValid);
		return Integer.parseInt(tmp);
	}
	
	public static void info(String msg) {
		System.out.println(msg);
	}
	
	public static void err(String msg) {
		System.out.println("ERROR] " + msg);
	}
}
