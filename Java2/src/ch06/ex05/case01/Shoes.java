package ch06.ex05.case01;

public class Shoes extends Product {
	public int price; // member variable은 객체가 가지고있지만, member method는 method area가 가지고있다.
	// 부모의 variable이 아님.
	public Shoes(int price) {
		super(price * 2); // Product 클래스가 가지고있는 price variable 초기화.
		this.price = price; // Shoes 클래스가 가지고 있는 price variable 초기화
	}
}
