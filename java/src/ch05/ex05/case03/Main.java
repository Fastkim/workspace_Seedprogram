package ch05.ex05.case03;

public class Main {
	public static void main(String[] args) {
		Calculator calculator = new Calculator();
		
		int result = calculator.add(1, 2);
		System.out.println(result);
		
		//
		Paper paper = new Paper();
		paper.setA(1);
		paper.setB(2);
		paper = calculator.add(paper); // "객체도 데이터이다"
		System.out.println(paper.getResult());
	}
}
