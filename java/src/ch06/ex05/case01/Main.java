package ch06.ex05.case01;

public class Main {
	public static void main(String[] args) {
		Shoes shoes = new Shoes(1000);
		
		System.out.println(shoes.price); // shoes객체의 클래스 타입이 Shoes이므로 Shoes 클래스의 초기화한 것이 출력된다.
	}
}
