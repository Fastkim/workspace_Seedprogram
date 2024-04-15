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
		/*
		System.out.print("숫자를 입력하세요.\n> "); // \n 은 nextInt가 읽지 않고 넘김.
		int i = sc.nextInt();
		System.out.println(i + "을 입력했습니다.");
		
		System.out.print("숫자를 입력하세요.\n> ");
		i = sc.nextInt();
		System.out.println(i + "을 입력했습니다.");
		sc.nextLine(); // 초기화
		
		System.out.println("문자열을 입력하세요.\n> ");
		String result = sc.nextLine();
		
		System.out.println( result + "을 입력했습니다.");
		*/
		System.out.print("문자를 입력하세요.\n> ");
		char c = sc.nextLine().charAt(0);
		System.out.println(c + "를 입력했습니다.");
	}
}
