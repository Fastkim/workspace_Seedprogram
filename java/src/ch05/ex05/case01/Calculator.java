package ch05.ex05.case01;

public class Calculator {
	public int add(int a, int b) {
		return a + b; // return이 선언되면 stack에 있던 a, b도 사라진다.
	}
	/*
	public int add(int x, int y) {
		return x + y;
	}
	*/
	
	public int add(int a, int b, int c) { // overRoading
		return a + b + c;
	}
}
