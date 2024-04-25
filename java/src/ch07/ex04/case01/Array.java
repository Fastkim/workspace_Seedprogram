package ch07.ex04.case01;

public class Array {
	public static void main(String[] args) {
		String[] strs = new String[3]; // 배열객체 strs, 나오는 주소에 String은 배열 원소의 타입이다.
		System.out.println(strs);
		
		Integer[] integers = new Integer[3]; // Integer : int를 표현한 클래스, 
		System.out.println(integers);
		
		int[] ints = new int[3]; // 클래스타입이 아닌 기본타입도 배열객체 타입으로 설정가능
		System.out.println(ints);
		
		System.out.printf("%d %d %d\n", integers[0], integers[1], integers[2]);
		System.out.printf("%d %d %d\n", ints[0], ints[1], ints[2]); // 배열도 객체이므로 heap에 공간이 생기고 초기화가 자동으로 된다.
		
		ints[0] = 0;
		ints[1] = 1;
		ints[2] = 2; // 배열[index] => 배열이름으로 생각해도된다.
		System.out.printf("%d %d %d\n", ints[0], ints[1], ints[2]);
		
		// iterating
		for(int i = 0; i < ints.length; i++) ints[i] = i;
		
		for(int i = 0; i < ints.length; i++)
			System.out.print(ints[i] + " ");
		System.out.println();
		
		// for each ( iterating 전용 문법)
		for(int i: ints) System.out.print(i + " ");
		
		int[] array = {0, 1, 2};
		array = new int[] {0, 1, 2};
	}
}
