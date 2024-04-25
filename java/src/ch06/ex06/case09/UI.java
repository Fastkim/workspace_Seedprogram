package ch06.ex06.case09;

public interface UI {
	static void in() { // 객체에 관심이 있으면 default method, 없으면 static method, 공통점은 body가 있는 추상메서드
		System.out.println("탁탁.");
	}
	
	void out();
}
