package ch09.ex03;

public class Counter {
	private int val;
	
	public synchronized void increase() { // 데이터에 접근할수 있는 메서드에 LOCK을 걸면된다. (synchronized)
		val++;
	}
	
	public synchronized void decrease() {
		val--;
	}
	
	public void print() {
		System.out.print(val + " ");
	}
}
