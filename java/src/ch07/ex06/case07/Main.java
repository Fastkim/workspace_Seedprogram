package ch07.ex06.case07;

public class Main {
	public static void main(String[] args) {
		Ship ship = new Ship();
		Container<Cow> container1 = new Container<>(); // 드디어 new 할때 generic type 결정
		Container<Car> container2 = new Container<>();
		
		ship.put(container1);
		ship.put(container2);
	}
}


