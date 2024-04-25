package ch07.ex01.case05;

public class Main {
	public static void main(String[] args) {
		Car car = new FireEngine();
		car.run();
//		car.water(); // 자동차타입일때는 불가능
		
		FireEngine fireEngine = (FireEngine)car;
		fireEngine.water();
		fireEngine.run();
		
		((Car)fireEngine).run(); // 메서드를 뭘 사용할거냐에 따라 타입을 결정하면된다.
	}
}
