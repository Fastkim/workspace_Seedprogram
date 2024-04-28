package ch06.ex06.case06;

public class Fridge implements HomeAppliance {
	@Override public void on() {}
	@Override public void off() {}
	
	@Override public void displayMsg() {}
	@Override public int getTemperature() {return 0;} // void가 아닐때 return 초기화설정해놓으면 에러표시사라짐.
	@Override public String getModelName() { return null; }
}
