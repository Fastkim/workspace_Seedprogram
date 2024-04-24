package ch05.ex05.case07;

public class Main {
	public static void main(String[] args) {
		Farmer farmer = new Farmer();
		Retailer retailer = new Retailer();
		Apple apple = new Apple();
		//과제: 농부가 1,000원에 사과를 유통업자에게 넘겼다.
		// 유통업자는 사과를 2,000원에 판다.
		apple = retailer.sell(farmer.sell(1_000));
		
		System.out.println(apple.getPrice());
	}
}
