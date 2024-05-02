package ch09.ex04;

public class Buffer { // 서로 다른 행동을 하는 Thread를 경쟁시키자. buffer : 1차원 메모리공간
	private Integer val;
	
	public synchronized int remove() {
		while(val == null) {
			try {
				wait();
			} catch(InterruptedException e) {} // 누가 깨웠으면 catch문 실행
		}
		
		int val = this.val; // buffer가 채워져있다.
		this.val = null;
		// Thread가 할일하고 종소리를 울린다.
		notifyAll(); // 종을 치면 wait()하고있던 Thread중에 한놈이 깨어난다. 누가 깨어날지는 VM이 결정
		
		return val;
	}
	
	public synchronized void add(Integer val) {
		while(this.val != null) {
			try {
				wait();
			} catch(InterruptedException e) {}
			
			this.val = val;
			notifyAll(); // Thread가 할일하고 종소리를 울린다.
		}
	}
}
