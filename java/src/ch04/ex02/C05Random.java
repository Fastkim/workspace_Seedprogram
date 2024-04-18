package ch04.ex02;

public class C05Random {
	public static void main(String[] args) {
//		double d = Math.random();
		// 과제: 1이상 10이하의 랜덤값을 생성하라.
		int a = (int)(Math.random() * 10) + 1; // 1이상: 시작값 , 10이하 : 끝값
		System.out.println(a);
	}
}
