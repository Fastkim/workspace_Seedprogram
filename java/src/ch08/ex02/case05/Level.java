package ch08.ex02.case05;

public enum Level { // enum은 데이터가 정해져있을때 사용.
	GOLD(3, null), SILVER(3, GOLD), COPPER(1, SILVER);
	
	private final int value;
	private final Level next;
	
	private Level(int value, Level next) { // enum 내부에서만 사용가능한 생성자, 외부에서 new로 사용불가
		this.value = value;
		this.next = next;
	}
	
	public int value() {
		return this.value;
	}
	
	public Level next() {
		return this.next;
	}
}
