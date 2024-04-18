package ch03.ex10;

public class C02Final {
	public static void main(String[] args) {
		final int MAX = 3; // 변수의 이름을 모두 대문자로 만든다면 값이 고정적이라는 관례, 하지만 final을 붙이면 이름이 있는 constant로 만들어줌.
		// MAX = 1;
		
		double area = 3.14 * 3 * 3;
		
		final double PI = 3.14;
		int r = 3;
		area = PI * r * r;
	}
}
