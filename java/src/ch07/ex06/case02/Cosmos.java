package ch07.ex06.case02;

public class Cosmos {
	public static Animal getAnimal(String animalName) { // Factory method : 문법이 아닌 알고리즘의 종류이다.
		return switch(animalName) {
		case "호랑이" -> new Tiger();
		case "매" -> new Falcon();
		default -> null;
		};
	}
}
