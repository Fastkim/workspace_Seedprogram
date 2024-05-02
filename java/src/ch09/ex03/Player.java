package ch09.ex03;

public class Player extends Thread {
	private Counter counter; // Thread 별로 각자 가져가는 variable (공유x), instance variable
	
	public Player(Counter counter) { // Player는 counter값을 공유한다.
		this.counter = counter;
	}
	
	@Override
	public void run() {
		for(int i = 0; i < 100; i++) {
			counter.increase();
			counter.decrease();
			
			if(i % 10 == 0) counter.print();
			
			try {
				Thread.sleep((int)(Math.random() + 2)); // Thread 자는 시간 랜덤, sleep() : playerThread가 자는것이다.
			} catch(InterruptedException e) {}
		}
	}
}
