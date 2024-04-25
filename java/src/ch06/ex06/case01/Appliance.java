package ch06.ex06.case01;

public abstract class Appliance {
	public void on() {}
	public abstract void off();  // 추상 메서드 : ()는 있지만 {} 이없다.
}

// 추상메서드를 1개이상 가지고있으면 추상클래스가 되어야만 한다.
// 일반메서드만 있을때에는 추상클래스가 되는것은 선택이다.
// 추상클래스를 사용하는 이유는 부모클래스라는것을 지정해주는 개념이다. 미완성 최상위 설계도같은 느낌?
// 즉, 메서드가 선언만 되어있고 자식클래스에서 메서드를 구현한다.
