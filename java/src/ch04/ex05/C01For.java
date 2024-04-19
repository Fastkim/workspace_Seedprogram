package ch04.ex05;

public class C01For {
	public static void main(String[] args) {
		for(int i = 0; i < 10; i++) { // 반복의 횟수를 알때에는 for를 사용
			System.out.print("*");
		}
		System.out.println();
		
		for(int i = 0; i < 10; i++)
			System.out.print(i + " ");
		System.out.println();
		
		// 과제: 초기값 i =1인 상황에서, 0이상 9이하를 출력하라.
		for(int i = 1; i < 10; i++) 
			System.out.print(i - 1 + " ");
		System.out.println(9);
		
		System.out.println();
		for(int i = 1; i <= 10; i++)
			System.out.print(i - 1 + " ");
	}
}
