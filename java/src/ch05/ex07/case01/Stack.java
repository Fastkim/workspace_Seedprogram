package ch05.ex07.case01;

// static method는 instance method를 call할 수 없다, 
// instance method는 static method를 call할 수 있다.
public class Stack {
	public static void first() { 
		int a = 0;
		Stack.second();
		
	}
	
	public static void second() {
		int a = 0;
	}
}
