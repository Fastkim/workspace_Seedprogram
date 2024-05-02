package ch08.ex02.case05;

public class User {
	private String userName;
	private Level level;
	
	public User(String userName, Level level) {
		this.userName = userName;
		this.level = level;
	}
	
	// domain이 가지고있는 데이터를 살짝 건드리는정도의 logic이면 domain에다가 메서드로 구현하자.
	
	public void upgradeLevel() {
		Level nextLevel = level.next();
		if(nextLevel != null) this.level = level;
	}
	
	@Override
	public String toString() {
		return String.format("%s %s", userName, level);
	}
}
