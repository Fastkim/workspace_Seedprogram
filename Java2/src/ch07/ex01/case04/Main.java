package ch07.ex01.case04;

public class Main {
	public static void main(String[] args) {
		Platanus platanus = new Platanus();
		
		Tree tree = new Platanus();
		platanus = (Platanus)tree;
		
		tree = platanus;
		tree = (Tree)platanus; // Promotion(자동 형변환)이 되더라도 casting 연산자를 사용할 수도있다.
	}
}
