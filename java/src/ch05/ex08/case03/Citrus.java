package ch05.ex08.case03;

public class Citrus {
	private String citrusName;
	
	public Citrus() {
//		this.citrusName = "레드향"; // hardCoding 이다. 확장성이 떨어진다.
//		Citrus("레드향");
		this("레드향");
	}
	
	public Citrus(String citrusName) {
		this.citrusName = citrusName;
	}
	
	public void setCitrusName(String citrusName) {
		this.citrusName = citrusName;
	}
}
