package ch06.ex06.case03;

import ch06.ex06.case01.Appliance;

public class Fridge extends Appliance {
	@Override
	public void off() {} // Appliance의 추상메서드를 일반메서드로 Override해줌으로써 자식클래스인 Fridge는 일반클래스가 되어 객체를 생성할수있다.
}
