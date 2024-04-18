package ch03.ex07;

public class C02StrCompare {
	public static void main(String[] args) {
		boolean b = false;
		
		String s = "a";
		b = s == "a"; // 상수로 만든 String a
		
		s = new String("a"); // 객체로 만든 string a
		System.out.println(s);
		b = s == "a"; // s 객체주소 == a의 constant (false) , 다만 constant도 주소가 있다.
//		
		b = s.equals("a");
		
		System.out.println(b);
		
	}
}
