package ch07.ex07.case04;

public class Smith {
	public Gun makeGun() {
		return () -> System.out.println("드르륵."); // fire() 추상메서드를 override하고있는것.
	}
}
