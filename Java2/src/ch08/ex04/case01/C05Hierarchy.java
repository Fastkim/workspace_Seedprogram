package ch08.ex04.case01;

public class C05Hierarchy {
	public static void main(String[] args) {
		try {
			int i = 3 / 0;
		} catch(ArithmeticException e) {
			System.out.println("ArithmeticException.");
		} catch(Exception e) { // Exception 타입은 대부분의 Exception을 포함.
			System.err.println("Exception");
		}
	}
}
