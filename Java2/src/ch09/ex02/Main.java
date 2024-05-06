package ch09.ex02;

public class Main {
	public static void main(String[] args) throws InterruptedException {
		System.out.println(Thread.currentThread().getName() + ": start."); // currentThread() 메서드를 call한 thread를 리턴(main thread)
		
		Thread counter = new Thread(new Counter());
		counter.start(); // thread 일 시작, run() 메서드 작동시작.
		
		int tries = 1;
		while(counter.isAlive()) { // isAlive(): counterThread가 죽으면(false return) while문을 빠져나온다.
			// thread가 살아있는지 확인하는 메서드 isAlive()
			if(tries <= 2) {
				// join() : mainThread는 1초동안 counterThread를 바라보고있다. (멈춰있다)
				counter.join(1000); // join 메서드 콜은 mainThread가 하고, join() 실행은 counterThread가 한다.
				System.out.println(Thread.currentThread().getName() + ": wait" + tries++); // tries는 mainThread가 기다린 횟수
			} else { // tries가 2를 초과했을때에도 살아있다면(일을 못끝냈다면) 넘어트려
				System.out.println(Thread.currentThread().getName() + ": irritated.");
				counter.interrupt(); // interrupt() : interruptException이 발생
				counter.join(); // counter가 일을끝낼때까지 시간제한없이 mainThread는 counterThread를 바라보겠다.
			}
		}
		
		System.out.println(Thread.currentThread().getName() + ": end.");
	}
}
