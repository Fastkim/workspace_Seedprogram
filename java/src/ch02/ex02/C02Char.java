package ch02.ex02;

public class C02Char {
	public static void main(String[] args) {
		char c = 'A';
		System.out.printf("%c, %s\n", c, Integer.toBinaryString(c));
		
		c = 65; 
		System.out.printf("%c, %s\n", c, Integer.toBinaryString(c));
		
		c = 0x0041; // 0041 : 16진수 , 16진수표현은 앞에 0x
		System.out.printf("%c, %s\n", c, Integer.toBinaryString(c));
		
		c = '\u0041'; // unicode 형태
		System.out.printf("%c, %s\n", c, Integer.toBinaryString(c));
	}
}
