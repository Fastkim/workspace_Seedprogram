package ch06.ex06.case05;

import ch06.ex06.case04.Appliance;

public class Fridge implements Appliance, Electronic { // 구현 클래스는 n개 선언이 가능하다, 상속받는 클래스는 자식이 한개만 가능.
	@Override public void on() {}
	@Override public void off() {}
	
	@Override public void displayMsg() {}
	@Override public int getTemperature() { return 0;} // void가 아닐때 return 초기화설정해놓으면 에러표시사라짐.
	@Override public String getModelName() { return null; }
}
