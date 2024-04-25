package ch06.ex05.case02;

public class Main {
	public static void main(String[] args) {
		Dog dog = new Dog(1);
		
		dog.shout();
		System.out.println(dog.getAge()); // getAge()의 this는 Animal 클래스 타입을 의미하기때문이다.
	}
}
