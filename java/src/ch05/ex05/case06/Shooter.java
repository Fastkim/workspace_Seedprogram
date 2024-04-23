package ch05.ex05.case06;

public class Shooter {
	// 과제] 멤버 변수로, 총잡이가 총을 갖고있다.를 표현하라.
	private Gun gun; // dependency, A has a B, Shooter has a Gun. 객체의 의존관계
	
	public void fire() {
		gun.fire();
	}

	public Gun getGun() {
		return gun;
	}

	public void setGun(Gun gun) {
		this.gun = gun;
	}
}

// accessor : read, write하는 getter,setter를 의미한다.