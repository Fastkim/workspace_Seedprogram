package ch06.ex06.case08;

public interface Animal {
	void move();
	
	default void eat() { // interface default method는 상속이 가능하다. 
		System.out.println("와구와구");
	} // 17버전 이후 추가된 기능, 자식이 모두 eat메서드를 공유, interface에 {}바디가 있는 메서드를 추가했다.
}
