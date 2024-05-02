package ch08.ex02.case03;

public class Main {
	public static void main(String[] args) {
		String name = Way.LEFT.name(); // feld name을 반환
		int ordinal = Way.LEFT.ordinal(); // field가 정의된 순서(index 개념)
		name = Way.RIGHT.name();
		ordinal = Way.RIGHT.ordinal();
		System.out.printf("%s %d\n", name, ordinal);
	}
}
