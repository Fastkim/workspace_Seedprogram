package ch02.ex03;

public class C02DoubleInt {
	public static void main(String[] args) {
		double d = 1.32;
		int i = (int)d;
		System.out.println(i);
		
		double f = Math.floor(d); // 소수점이하 내림처리
		double r = Math.round(d); // 소수점이하 첫번째자리 반올림
		System.out.printf("%.2f, %.2f\n", f, r); // 소수점 이하 2번째자리까지 표시한다.
		
		int f2 = (int)f;
		int r2 = (int)r;
		System.out.printf("%d, %d\n", f2, r2);
	}

	
	
}
