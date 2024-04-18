package ch04.ex02;

public class C02Switch {
	public static void main(String[] args) {
		String grade = "silver";
		
		String coupon = switch(grade) {
		case "gold" -> "5만원";
		case "silver" -> "1만원";
		default -> "1천원";
		};
		
		coupon = switch(grade) {
		case "gold", "silver" -> "5만원";
		default -> "1천원";
		};
		
		System.out.println(coupon);
	}
}
