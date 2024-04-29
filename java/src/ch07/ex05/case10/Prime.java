package ch07.ex05.case10;

public class Prime implements AutoBot {
	@Override
	public void run() {
		System.out.println("프라임 달린다.");
	}
	
	@Override
	public void fight() {
		System.out.println("프라임 싸우다.");
	}
	
	public void command() {
		System.out.println("프라임 지휘하다.");
	}
}
