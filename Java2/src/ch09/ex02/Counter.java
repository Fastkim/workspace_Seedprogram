package ch09.ex02;

public class Counter implements Runnable {
	@Override
	public void run() { // Runnable Functional interface를 구현하므로 한개만 있는 추상메서드 run()을 override해야한다.
		System.out.println(Thread.currentThread().getName() + ": start."); // 일하고있는 노동자가 누군지 알아보려면 currentThread() 사용
		
		for(char c = 'a'; c <= 'f'; c++) {
			System.out.println(Thread.currentThread().getName() + ": " + c);
			try {
				System.out.println(Thread.currentThread().getName() + ": sleep.");
				Thread.sleep(1000);
			} catch(InterruptedException e) {
				System.out.println(Thread.currentThread().getName() + ": interrupted");
			}
		}
		
		System.out.println(Thread.currentThread().getName() + ": end.");
	}
}
