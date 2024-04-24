package ch05.ex09.case01;

import ch05.home.ex06.case02.Console;

public class Init {
	private static int s;
	private int i;
	
	static { // static block : static variable 초기화
		Init.s = 1;
		//this.i = 1;
		Console.info("static{}");
	} // 한 번만 실행된다.
	
	{
		this.i = 1;
		Init.s = 1;
		Console.info("{}");
	}
	
	{
		Console.info("{}2");
	} // instance block
	
	public Init() {
		Console.info("Init()");
	}
	
	public Init(int i) {
		Console.info("Init(int)");
		
	}
}
