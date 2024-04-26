package ch07.ex01.case08;

public class Clerk {
	public Flower sell(String flowerName) { // 다형성을 return 타입에 이용중. 다양한 타입을 던져줄 수 있다.
		Flower flower = switch(flowerName) {
		case "백합" -> new Lily();
		case "장미" -> new Rose();
		default -> null;
		};
		
		return flower;
	}
}
