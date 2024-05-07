package ch02.ex02;

public class C03String {
	public static void main(String[] args) {
		int a = 1;
		int b = 2;
		int c = 3;
		int sum = a + b + c;
		System.out.printf("sum: %d\n", sum);
		
		String sumStr = "" + sum; // + 연산자가 String + int를 결합해서 String값을 반환함.
		System.out.println(sumStr);
		
		int i = Integer.parseInt(sumStr); // String타입을 int로 다시 변환, static method
		
		String s = a + b + "";
		System.out.println(s); // string value return
		
		s = "" + a + b; // empty string 순서 주의
		System.out.println(s);
		
		String dialog = "John said, \"hello\"."; // " double quotation 표현을 위해 \(백슬래시)를 앞에 추가
		System.out.println(dialog);
		
	}
}
