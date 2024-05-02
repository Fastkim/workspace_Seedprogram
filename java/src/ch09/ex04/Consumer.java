package ch09.ex04;

public class Consumer implements Runnable {
	private String consumerName;
	private Buffer buffer; // Consumer는 Buffer를 공유
	
	public Consumer(String consumerName, Buffer buffer) {
		this.consumerName = consumerName;
		this.buffer = buffer;
	}
	
	@Override
	public void run() {
		for(int i = 0; i < 5; i++) {
			int val = buffer.remove();
			System.out.println(this.consumerName + ": " + val);
			
			try {
				Thread.sleep((int)(Math.random() * 100));
			} catch(InterruptedException e) {}
		}
	}
}
