package ch05.ex09.case02;

public class Phone {
	private static int cnt; // count는 객체들이 공유하는 데이터
	private int serial; // 객체별로 따로따로 가져가는 데이터
	
	{ // instance block에 instance variable을 초기화
		serial = ++cnt * 100;
	}
	
	public Phone() {}
	
	public Phone(int serial) {
		this.serial = serial;
	}
	
	public int getSerial() {
		return this.serial;
	}
	
}
