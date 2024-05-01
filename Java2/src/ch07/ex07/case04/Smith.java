package ch07.ex07.case04;

public class Smith {
	public Gun makeGun() { // Gun 타입을 가지고있다는것은 한개만 존재하는 추상메서드를 가리키고있다는 의미
		return () -> System.out.println("드르륵."); // fire() 추상메서드를 Override하고 있는 것.
	}
}
