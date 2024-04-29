package ch07.ex05.case01;

public class Main {
	public static void main(String[] args) {
		Basket<Apple> basket = new Basket<Apple>(); // generic 타입의 결정은 new할때 결정한다.
		basket.set(new Apple());
		System.out.println(basket.get());
		
		Basket<Grape> basket2 = new Basket<Grape>();
		basket2.set(new Grape());
		System.out.println(basket2.get());
	}
}
