package ch06.ex06.case10;

public class Main {
	public static void main(String[] args) {
		BusCard card = new BusCard() { // BusCard 타입으로 card라는 변수에 담아둔것이다, BusCard클래스의 객체를 생성한것이 아님.
			@Override
			public void tagOn() {
				System.out.println("tag on.");
			}// 이름이 없는 클래스 객체를 생성, 1회용이다.
			
			@Override
			public void tagOff() {
				System.out.println("tag off.");
			}
		}; // 이런 구조는 네이티브앱(안드로이드, ios, 모바일환경)에서 많이 사용했다.
		
		card.tagOn();
		card.tagOff();
	}
}
