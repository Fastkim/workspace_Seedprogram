package ch02.ex01;

import java.util.Scanner;

public class C03Input {
	public static void main(String[] args) {
		// compiler 가 java.lang package(기본패키지)는 자동으로 찾아준다.(String, System.out.println())
		Scanner sc = new Scanner(System.in);
		
		// 과제: <입력값>을 입력했습니다.
		/*
		System.out.print("문자열을 입력하세요.\n> ");
		String result = sc.nextLine();
		System.out.println(result + "을 입력했습니다.");
		*/
		
		System.out.print("숫자를 입력하세요.\n> ");
		int i = sc.nextInt();
		System.out.println(i + "을 입력했습니다.");
		
		
	}
}
