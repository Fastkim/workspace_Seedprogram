package ch03.ex08;

public class Logical {
	public static void main(String[] args) {
		boolean b = false;
		
		b = true && true;
		b = (2 > 1) && (2 > 1);
		b = 2 < 1 && 2 > 1; // && : 앞 연산에서 false가 반환되면 뒤는 계산하지않는다.
		b = 2 < 1 || 2 > 1;
		b = 2 > 1 || 2 > 1; // || : 앞 연산에서 true가 반환되면 뒤는 계산하지않는다.
		System.out.println(b);
		
		int x = 0;
		int y = 0;
		b = ++x < 0 & ++y < 0; // 느린 & 한개는 끝까지 계산한다.
		
		x = 0;
		y = 0;
		b = ++x < 0 && ++y < 0; // 빠른 &는 초기값에서 조건에 만족하면 뒤는 계산하지않는다.
		
		x = 0;
		y = 0;
		b = ++x > 0 || ++y < 0;
		
		x = 0;
		y = 0;
		b = ++x > 0 | ++y < 0;
		
		System.out.printf("x: %d, y: %d, b: %b", x, y, b);
	}
}
