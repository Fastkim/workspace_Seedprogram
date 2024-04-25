package ch06.ex02.case02;

public class Parent {
	private String regNum;
	private String parentName;
	private int money;
	
	private String getRegNum() { // access modified : private 메서드
		return regNum;
	}
	public String getParentName() { // 모두 가져가도록 해
		return parentName;
	} 
	protected int getMoney() { // 자식은 알려줄게 protected, 같은 패키지에 있으면 알려줌.
		return money;
	}
	
	void addMoney(int money) { // 아는사람이 주면 받아야지 default
		this.money += money;
	}
}
