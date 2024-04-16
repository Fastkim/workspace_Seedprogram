package ch02.home.ex03;

import java.util.Scanner;

public class Unicode {
	public static void main(String[] args) {
		int unicode = 0;
		char text = ' ';
		Scanner sc = new Scanner(System.in);
		
		System.out.print("문자: ");
		text = sc.next().charAt(0);
		
		unicode = text; // promotion
		System.out.println(text + "의 unicode " + unicode + " 입니다.");
		
	}
}
/*
과제: 입력한 문자의 unicode 를 출력하라.
--

문자: A
A의 unicode 65 입니다.
 * */
