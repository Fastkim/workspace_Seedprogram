package ch06.ex02.case01;

public class A {
	private int a; // 가장 범위가 좁은
	int b; // 접근제한자(access modified) : default => 2번째
	protected int c;
	public int d; // 가장범위가 넓은
	
	private void m1() {}
	void m2() {}
	protected void m3() {}
	public void m4() {}
}
