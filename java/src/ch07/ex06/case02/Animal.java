package ch07.ex06.case02;

public interface Animal {
	default void eat() { // 상속이 가능한 메서드
		System.out.println("먹다."); // 동물은 모두 먹겠지. 이미 정해져있어. 그러므로 인터페이스 단계에서 바디설정
	}
	
	void move(); // 움직이는건 새, 혹은 지상동물이 다르게 움직이므로 추상메서드로 바디없이 생성
}
