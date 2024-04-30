package ch07.ex06.case04;

public class Main {
	public static void main(String[] args) {
		Box box = new Box();
		Integer[] arr1 = {1, 2, 3};
		String[] arr2 = {"a", "b", "c"};
		
		int i = box.getLastVal(arr1); // generic method는 call 하는시점에 generic type이 결정된다.
		String s = box.getLastVal(arr2); // 1.new 할때 , 2.call 할때
		
		System.out.printf("%d %s", i, s);
	}
}
