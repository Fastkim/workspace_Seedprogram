package ch06.ex04.case03;

public class Circle extends Point { // A는 B이다(x), A는 B를 포함하고있다.
	private int r;
	
	public Circle(int x, int y, int r) {
		super(x, y);
		this.r = r;
	}
	
	@Override
	public String toString() {
		return String.format("(%d, %d), %d", this.getX(), this.getY(), r);
	}
}
