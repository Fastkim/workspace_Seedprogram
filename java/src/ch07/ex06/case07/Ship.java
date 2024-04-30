package ch07.ex06.case07;

import java.util.ArrayList;
import java.util.List;

public class Ship {
	private List<Container<?>> containers; // 디자인되는시점에 Container의 타입을 결정하고싶지 않을때 wild card 사용
	
	public Ship() {
		containers = new ArrayList<>();
	}
	
	public void put(Container<?> container) {
		containers.add(container);
	}
}
