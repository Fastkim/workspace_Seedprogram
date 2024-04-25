package ch06.ex02.case02.sub;

import ch06.ex02.case02.Parent;

public class Friend {
	public void play() {
		Parent parent = new Parent();
		
		//parent.getRegNum();
		parent.getParentName(); // 다른패키지이면 public만 가능하다구!
		//parent.getMoney();
		//parent.addMoney();
	}
}
