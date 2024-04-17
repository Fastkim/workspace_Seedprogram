package ch03.home.ex04;

import java.util.Scanner;

public class Sum {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.print("a: ");
		int a = sc.nextInt();
		System.out.print("b: ");
		int b = sc.nextInt();
		int result = a + b;
		System.out.printf("%d + %d = %d", a, b, result);
	}
}
/*
 과제 : 두 자연수를 입력 받아 , 그 합계를 출력하라.
 --
 
 a: 1
 b: 2
 1 + 2 = 3
 */
