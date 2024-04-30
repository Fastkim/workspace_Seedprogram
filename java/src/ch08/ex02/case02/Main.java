package ch08.ex02.case02;

public class Main {
	public static void main(String[] args) {
		Way way = Way.LEFT;
		String direction = "";
		
		direction = switch(way) { // way 객체가 명시됐으므로 case절에서 생략가능
		case LEFT -> "왼쪽";
		case RIGHT -> "오른쪽";
		default -> "";
		};
		
		System.out.println(direction);
	}
}
