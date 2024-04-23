package ch05.ex05.case03;

public class Calculator {
	public int add(int a, int b) {
		return a + b;
	}
	
	public Paper add(Paper paper) {
		// 과제: paper의 a, b를 더한 result를 paper에 적어라.
		//		 위 paper를 return 하라.
		int result = paper.getA() + paper.getB();
		paper.setResult(result);
		return paper; // 종이 토해냇
	}
}
