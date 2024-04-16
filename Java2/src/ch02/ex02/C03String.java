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
		
		int i = Integer.parseInt(sumStr); // static method
		
		String s = a + b + "";
		System.out.println(s); // string value return
		
		s = "" + a + b; // empry string 순서 주의
		System.out.println(s);
		
		String dialog = "John said, \"hello\"."; // 문자열 안에 "" double quotation을 삽입하는경우
		System.out.println(dialog);
	}
}
