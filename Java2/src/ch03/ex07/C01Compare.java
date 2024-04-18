package ch03.ex07;

public class C01Compare {
	public static void main(String[] args) {
		boolean b = 'A' < 'B';
		b = '2' == 2; //  String == int // promotion이 되지 않음.
		b = 'A' != 65; // 'A' 를 int타입으로 변환한후 우측과 비교
		
		b = 10.0 == 10.0f;
		b = 0.1 == 0.1f; // 1미만의 값은 다르다, 0.1f를 double 타입으로 promotion 
		b = (float)0.1 == 0.1f;
//		
		System.out.println(b);
	}
}
