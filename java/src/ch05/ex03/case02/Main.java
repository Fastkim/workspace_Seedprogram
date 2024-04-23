package ch05.ex03.case02;

public class Main {
	public static void main(String[] args) {
		Tv tv1 = new Tv();
		Tv tv2 = new Tv();
		
		System.out.printf("%s\n%s\n\n", tv1, tv2);
		System.out.printf("%s\n%s\n\n", tv1.getColor(), tv2.getColor());
		
		tv1.setColor("red"); // tv1에 빨간색으로 페인트칠
		System.out.printf("%s\n%s\n\n", tv1.getColor(), tv2.getColor());
		
		tv2 = tv1;
		System.out.printf("%s\n%s\n\n", tv1, tv2); // tv2와 tv1의 주소가 동일하다.
		System.out.printf("%s\n%s\n\n", tv1.getColor(), tv2.getColor()); // variable이 동일해졌다.
	}
}
