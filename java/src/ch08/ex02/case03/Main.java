package ch08.ex02.case03;

public class Main {
	public static void main(String[] args) {
		String name = Way.LEFT.name(); // field name을 반환
		int ordinal = Way.LEFT.ordinal(); // field가 정의된 순서(index 개념)
		name = Way.RIGHT.name();
		ordinal = Way.RIGHT.ordinal();
		System.out.printf("%s %d\n", name, ordinal);
		
		Way[] ways = Way.values(); // values() : 필드반환
		for(Way way: ways) System.out.print(way + " ");
		System.out.println();
		
		Way way = Way.valueOf("LEFT"); // Way 이넘에서 LEFT라는 필드를 return
		System.out.println(way);
	}
}
