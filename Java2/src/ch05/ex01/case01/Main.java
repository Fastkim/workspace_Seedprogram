package ch05.ex01.case01;

public class Main {
	public static void main(String[] args) {
		int hour = 12;
		int minute = 35;
		int second = 30;
		System.out.printf("%d시 %d분 %d초\n", hour, minute, second);
		
		Time time = new Time(); // 객체 선언
		time.hour = 12; // time이란 객체 한곳에 연관이 있는 변수 3개를 넣어두었다.
		time.minute = 35;
		time.second = 30;
		System.out.printf("%d시 %d분 %d초\n", time.hour, time.minute, time.second);
		
		Time time2 = new Time(); // variable name으로 구분하면되고, VM은 객체주소로 구분한다.
		time2.hour = 10;
		time2.minute = 30;
		time2.second = 27;
		System.out.printf("%d시 %d분 %d초\n", time.hour, time.minute, time.second);
		
		// 즉 hashCode가 다르다 = 주소가 다르다, ch05.ex01.case01.Time@682a0b20 ==> full name, Time 클래스 => short name
		System.out.println(time); // 주소를 바탕으로 만들어진 hashCode, java는 객체의 주소를 공개하지않는게 원칙, 주소공개되면 개발자가 에러를 일으킴.
		System.out.println(time.toString()); // 객체의 주소에는 toString이 생략되어있다.
		System.out.println(time2); // time1 != time2의 객체주소는 다르다.
	}
}
