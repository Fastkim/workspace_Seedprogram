package ch09.ex01;

public class C01Counter { // 1개의 프로세스(공장)에는 여러명(Multi)의 노동자(Thread)가 있다.   
	// thread는 process에 종속적이다.
	public static void main(String[] args) {
		System.out.println("main start.");
		
		Thread thread1 = new Thread(() -> {
			for(int i = 0; i < 10; i++)
				System.out.print(i + " ");
		}); // 첫번째 노동자는 숫자찍기를 진행해, Thread()의 파라미터는 데이터이므로 타입이 있고 Runnable타입이다.
			// 사용되는 메서드 이름은 run()이다, 즉 파라미터로 데이터가 들어가면 run() 메서드를 콜하게된다.
		
		Thread thread2 = new Thread(() -> {
			for(char c = 'a'; c <= 'z'; c++)
				System.out.print(c + " ");
		});
		
		thread1.start(); // thread객체.start() : thread 작동
		thread2.start();
		
		// mainThread와, thread1, thread2 총 3개의 thread가 실행되었다.
		// 컴퓨터는 0과 1의 세계이므로 동시에 thread가 실행되지는 않는다. (시간을 쪼갠다)
		// 따라서 어떤방식으로 시간을쪼개서 각 Thread를 사용할지는 VM의 권한에 달려있다.
		System.out.println("main end.");
	}
}

// time sharing: 시간을 쪼개서 thread를 사용하는것을 말한다.
// window 운영체제는 멀티프로세스(eclipse, 브라우저 등 여러 프로그램), 멀티스레드 체제이다.
// window 운영체제도 time sharing을 사용하지만 너무 정교하기때문에 사용자가 인식하지 못하는것이다.
