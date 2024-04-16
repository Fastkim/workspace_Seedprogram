package ch02.ex03;

public class C01IntDouble {
	public static void main(String[] args) {
		int i = 1;
		double d = 0.0;
		
		d = i; // promotion casting (자동 형변환)
		System.out.printf("%f, %d\n", d, i);
		
		d = (double)i;
		System.out.printf("%f, %d\n", d, i);
		
//		i = d; promotion casting이 불가하다. float > int
		i = (int)d;
		System.out.printf("%f, %d\n", d, i);
	}
}
