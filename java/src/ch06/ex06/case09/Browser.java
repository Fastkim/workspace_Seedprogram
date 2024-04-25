package ch06.ex06.case09;

public class Browser implements UI {
	@Override
	public void out() {
		System.out.println("<HTML>");
	}
	
	public static void play() {
		System.out.println("빰빰.");
	}
}
