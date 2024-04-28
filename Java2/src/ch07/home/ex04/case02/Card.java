package ch07.home.ex04.case02;

public class Card {
private int cardNumber;
	
	// 생성자나 setter method를 통해 injection(값을 투입) 하면된다.
	public Card(int cardNumber) {
		this.cardNumber = cardNumber;
	}
	
	@Override
	public String toString() {
		return String.format("%d ", cardNumber);
	}
}
