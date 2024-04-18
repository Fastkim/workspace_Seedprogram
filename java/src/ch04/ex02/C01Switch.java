package ch04.ex02;

public class C01Switch {
	public static void main(String[] args) {
		int grade = 2;
		String coupon = "";
		
		coupon = switch(grade) {
		case 1 -> "5만원";
		case 2 -> "1만원";
		default -> "1천원";
		};
		
		System.out.println(coupon);
	}
}
