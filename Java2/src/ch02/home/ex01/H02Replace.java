package ch02.home.ex01;

import java.util.Scanner;

public class H02Replace {
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("숫자a 를 입력하세요 : ");
		int a = sc.nextInt();
		System.out.println("숫자b 를 입력하세요 : ");
		int b = sc.nextInt();
		
		System.out.printf("%d, %d\n", a, b);
		
		int tmp = 0; // backup
		tmp = a;
		a = b;
		b = tmp;
		
		System.out.printf("%d, %d\n", a, b);
	}
}

/*
과제: H01 을 확장성 있게 고도화하라.
*/