package ch07.ex07.case03;

public class Main {
	public static void main(String[] args) { // 추상메서드를 lambda로 구현해준것이다.
		Calculator calculator = (int x, int y) -> {
			int result = x + y;
			return result;
		};
		// int a, int b 없어도 interface에 설정되어있는걸 compiler가 인식한다.
		calculator = (a, b) -> a + b; // body에 return을 쓰지 않아도 compiler가 return을 인식.
		
		System.out.println(calculator.calc(1, 2));
	}
}
