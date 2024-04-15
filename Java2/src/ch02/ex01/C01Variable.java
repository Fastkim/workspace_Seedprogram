package ch02.ex01;

public class C01Variable {
	public static void main(String[] arrgs) {
		// public : 접근에 제한이 없다, static : 객체생성없이 사용할 수 있는 메서드 
		// void : return 값이 없는 메서드
		// String[] : 메서드 안의 내용이 배열에 담긴다는 뜻
		// constant : false, true, variable: bl
		boolean bl = false;
		bl = true;
		
		byte b = 0; // 1byte = 8bit
		short s = 0; // 2byte = 16bit
		char c = 0; // 2byte = 16bit
		int i = 0; // 4byte = 32bit
		long l = 0; // 8byte = 64bit
		float f = 0.0f; // 4byte = 32bit
		double d = 0.0; // 8byte = 64bit
		
		String str = "hello";
		
		int a;
		a = 0; // initialization : 초기화
		
		int x;
		int y;
		int x2, y2; // 권장 x
		int x3 = 0, y3 = 0; // 권장 x
	}
}
