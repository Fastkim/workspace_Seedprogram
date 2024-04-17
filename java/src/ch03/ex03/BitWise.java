package ch03.ex03;

public class BitWise {
	public static void main(String[] args) {
		int x = 10;
		System.out.printf("%s, %d\n",
				"0000000000000000000000000000" + Integer.toBinaryString(x), x);
		
		x = ~x;// bit 전환 연산자 : ~ 0은 1로, 1은 0으로 전환
		System.out.printf("%s, %d\n", Integer.toBinaryString(x), x);
	}
}
