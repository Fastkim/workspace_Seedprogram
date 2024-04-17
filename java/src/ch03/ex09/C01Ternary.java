package ch03.ex09;

public class C01Ternary {
	public static void main(String[] args) {
		int x = 1;
		int y = 1;
		
		int absX = (x >= 0) ? x : -x; // 조건 ? true일 경우 실행 : false일 경우 실행
		int absY = (y >= 0) ? y : -y;
		
		System.out.printf("absX: %d\nabsY: %d", absX, absY);
		
	}
}
