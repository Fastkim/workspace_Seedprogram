package ch08.ex04.case01;

public class C02Try {
	public static void main(String[] args) {
		int[] arr = new int[10];
		
		try { // try 블록과 catch 블록은 서로 배타적
			int result = arr[10];
		} catch (ArrayIndexOutOfBoundsException e) { // exception 객체를 담을 variable을 선언
			// 다른종류 타입의 exception이 발생하면 catch가 작동하지 않음.
			System.out.println("error");
		}
		
		System.out.println("end.");
	}
}
