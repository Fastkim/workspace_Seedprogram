package ch07.ex07.case04;

public class Shooter {
	public void fire(Gun gun) { // gun type의 메서드, 객체를 파라미터로 받으면된다, 내부적으로는 메
		gun.fire();
	}
}
