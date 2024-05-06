package ch09.ex01;

public class C03Sleep {
	public static void main(String[] args) {
		for(int i = 0; i < 10; i++) {
			System.out.print(i + " ");
			
			try {
				Thread.sleep(1000); // 1000ms = 1초 mileSecond 단위로 파라미터를 주면됨.
			} catch(Exception e) {}
		}
	}
}
