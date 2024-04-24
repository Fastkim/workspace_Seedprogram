package ch06.ex03.case03;

public class Main {
	public static void main(String[] args) {
		Duck duck = new Duck();
		Hen hen = new Hen();
		
		System.out.printf("%s\n%s", duck, hen); // duck 객체는 객체의 주소(기본값)대신 override한 내용을 출력한다.
	}
}
