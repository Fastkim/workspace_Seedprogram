package ch06.ex06.case04;

public interface Appliance { // interface는 클래스이다.
	// method가 전부 추상메서드인것을 interface라고 한다.
	/* public abstract */void on(); // access modified(public) 와 abstract를 생략하면 compiler가 자동으로 생성해준다.
	void off();
	
	// interface는 표준의 역할을 한다. interface는 객체를 생성하지않는다.
	// ex) 냉장고의 표준, 전자레인지의 표준
}
