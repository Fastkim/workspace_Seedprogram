package ch05.ex09.case01;

public class Main {
	public static void main(String[] args) {
		new Init();
		new Init(); // 생성자는 new로 콜한다, 간혹 this로 콜한다.
		
		new Init(3);
	}
}
