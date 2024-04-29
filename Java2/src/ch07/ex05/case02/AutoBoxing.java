package ch07.ex05.case02;

public class AutoBoxing {
	public static void main(String[] args) {
		System.out.println(add(1, 2));
	}
	
	private static int add(Integer a, Integer b) { // auto-boxing: 객체가 아닌값을 객체로 자동으로 만들어주는것을 말한다.
		return a + b; // auto-anboxing => 연산을 위해 boxing을 자동으로 해제한다. 
	}
}
