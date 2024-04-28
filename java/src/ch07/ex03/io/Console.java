package ch07.ex03.io;

import java.util.Scanner;

public interface Console { 
	Scanner sc = new Scanner(System.in);  // public static final이 생략되어있다.
	// static method 는 상속되지 않는다, default method는 상속이된다, 두개의 공통점은 interface안에서 body를 가지는 메서드이다.
	
	static void info(Object obj) {
		System.out.println(obj);
	}
	
	static String inStr(String msg) {
		System.out.print(msg + "\n> ");
		return sc.nextLine().trim();
	}
}

// utility : 어떤 업무에도 종속되지 않은것을 말한다.
