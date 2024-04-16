package ch02.home.ex01;

public class H01Replace {
	public static void main(String[] args) {
		int a = 1;
		int b = 2;
		
		System.out.printf("%d, %d\n", a, b);
		int tmp = 0; // backup
		tmp = a;
		System.out.printf("%d, %d\n", tmp, b);
		
		a = b;
		b = tmp;
		System.out.printf("%d, %d\n", a, b);
	}
}

/*
과제: 두 변수의 데이터를 교체하라.
a: 1, b: 2
a: 2, b: 1
*/
