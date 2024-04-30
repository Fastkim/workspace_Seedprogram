package ch07.ex07.case02;

@FunctionalInterface
public interface Human {
	void say(); // 추상메서드는 하나뿐이다.
	
	static void walk() { // static method
		System.out.println("Human walk.");
	}
	
	default void sleep() { // default method
		System.out.println("Human sleep.");
	}
}
