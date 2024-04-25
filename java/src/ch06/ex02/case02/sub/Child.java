package ch06.ex02.case02.sub;

import ch06.ex02.case02.Parent;

public class Child extends Parent {
	public void play() {
		//this.getRegNum(); // 상속되어있어도 private은 안돼
		this.getParentName();
		this.getMoney();
		//this.addMoney(1000);
	}
}
