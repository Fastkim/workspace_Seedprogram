package ch07.ex04.case03;

public class Slot {
	private Ball[] balls;
	
	public Slot() {
		balls = new Ball[45];
		
		for(int i = 0; i < balls.length; i++)
			balls[i] = new Ball(i + 1);
	}
	/*
	public Ball chuck() { // 토해내다 : chuck
		return balls[(int)(Math.random() * 45)];
	}
	*/
	// 같은 번호가 나오는 버그를 해결하라.
	public Ball chuck() {
		int i = 0;
		Ball ball = null;
		
		do {
			i = (int)(Math.random() * 45);
			ball = balls[i];
			balls[i] = null;
		} while(ball == null);
		
		return ball;
	}
}
