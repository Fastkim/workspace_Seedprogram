package ch07.ex01.case09;

public class Shooter {
	private Gun gun; // member variable은 interface 명으로 한다.
	
	public void fire() {
		this.gun.fire(); // gun 객체 : dependency
	}
	
	public void setGun(Gun gun) {
		this.gun = gun;
	}
}
// DI : Dependency Injection => dependency 객체를 집어넣는다는 의미
