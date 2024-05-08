package com.my.hr.io;

import java.util.Scanner;

public interface Console {
	Scanner sc = new Scanner(System.in);
	
	static void info(Object obj) {
		System.out.println(obj);
	}
	
	public static void inMsg(String msg) {
		System.out.print(msg);
	}
	
	public static String inStr(String msg) {
		String input = "";
		boolean isGood = false;
		
		do {
			Console.inMsg(msg);
			input = sc.nextLine();
			isGood = input.matches("[a-bA-B가-힣]+") && (input.length() <= 5);
			if(!isGood) Console.err("문자가 아닙니다.");
		} while(!isGood);
		
		return input;
	}
	
	
	public static String inDate(String msg) {
		String input = "";
		boolean isGood = false;
		
		do {
			Console.inMsg(msg);
			input = sc.nextLine();
			isGood = input.matches("^[\\d]{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$");
			if(!isGood) Console.err("날짜 형식이 아닙니다.");
		} while(!isGood);
		
		return input;
	}
	
	static int inNum(String msg) {
		String input = "";
		Boolean isGood = false;
		do {
			Console.inMsg(msg);
			input = sc.nextLine().trim();
			isGood = input.matches("^[0-4]$");
			if(!isGood) Console.err("번호를 다시 입력해주세요.\n");
		} while(!isGood);
		
		return Integer.parseInt(input);
	}
	
	static int indexNum(String msg) {
		String input = "";
		Boolean isGood = false;
		do {
			Console.inMsg(msg);
			input = sc.nextLine().trim();
			isGood = input.matches("^[1-9]+");
			if(!isGood) Console.err("번호를 다시 입력해주세요.\n");
		} while(!isGood);
		
		return Integer.parseInt(input);
	}
	
	public static void err(String msg) {
		System.out.println("ERROR]" + msg);
	}
}
