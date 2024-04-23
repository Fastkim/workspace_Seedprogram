package ch05.ex03.case01;

public class Main {
	public static void main(String[] args) {
		TV tv = new TV();
		
		System.out.println(tv);
		
		tv.setColor("red");
		tv.setPower(true);
		tv.setChannel(7);
		
		System.out.printf("%s, %b, %d", tv.getColor(), tv.isPower(), tv.getChannel());
	}
}
