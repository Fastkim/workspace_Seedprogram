package ch05.ex06.case02;

public class Main {
	public static void main(String[] args) {
		Console.inStr("문자를 입력하세요."); // 누가 문자를 입력하는지
		Console.inNum("숫자를 입력하세요."); // 누가 숫자를 입력하는지 관심이없으므로 static method를 활용하는것이다.
		
		Console.err("전원이 끊깁니다.");
		Console.info("끝.");
	}
}
