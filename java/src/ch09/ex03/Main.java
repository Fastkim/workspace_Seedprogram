package ch09.ex03;

public class Main {
	public static void main(String[] args) {
		Counter counter = new Counter();
		// VM이 시간에 차등을 두고(time sharing) 실행한다. 즉 자원하나로 여러 스레드가 달려들면 문제가 발생함.
		// 먼저들어온 thread가 자원을 잠그고 일이끝나면 잠금을 풀고 빠져나가고
		// 데이터에 접근할수있는 메서드에 LOCK을 걸면된다. 완벽하지는 않다.
		new Player(counter).start();
		new Player(counter).start();
		new Player(counter).start();
	}
}
