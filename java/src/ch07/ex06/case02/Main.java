package ch07.ex06.case02;

import java.util.ArrayList;
import java.util.List;

public class Main {
	public static void main(String[] args) {
		List<Animal> zoo = new ArrayList<>();
		zoo.add(new Tiger());
		zoo.add(new Falcon());
		
		zoo.clear(); // 모든 원소청소
		zoo.add(Cosmos.getAnimal("호랑이")); // Factory method로 객체를 생성하는게 우리네현실과 더 맞닿아있다.
		zoo.add(Cosmos.getAnimal("매"));
		
		for(Animal animal: zoo) {
			animal.eat();
			animal.move();
		}
	}
}
