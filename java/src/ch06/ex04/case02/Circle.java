package ch06.ex04.case02;

public class Circle {
	private int x; // 원의중심 x 좌표
	private int y; // 원의중심 y 좌표
	private int r; // 원
	
	public Circle(int x, int y, int r) {
		this.x = x;
		this.y = y;
		this.r = r;
	}
	
	@Override
	public String toString() {
		return String.format("(%d, %d), %d", x, y, r);
	}
}
