package ch06.ex06.case05;

import java.time.LocalDate;

public interface Electronic { // instance를 만들지 않기때문에 instance variable이 존재할 수 없다.
	public static final int VOLTAGE = 200; // static variable은 VM이 바이트코드를 로딩할때 생성, final : 상수
	static final String MAKER_NAME = "LG"; // public을 생략해도 compiler가 생성해준다.
	LocalDate PRODUCED_DATE = LocalDate.now(); // 즉 compiler는 interface member variable에서는 public static final을 자동으로 생성해준다.
	
	public abstract void displayMsg();
	abstract int getTemperature();
	String getModelName(); // interface method에서는 compiler가 public abstract를 자동으로 생성해준다.
}
