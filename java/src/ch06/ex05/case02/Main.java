package ch06.ex05.case02;

public class Main {
	public static void main(String[] args) {
		Dog dog = new Dog(1);
		
		dog.shout();
		System.out.println(dog.getAge());
		// getAge()의 this는 Animal 클래스 타입을 의미하기 떄문이다, 자식에 해당 메서드가 없기때문에
		// 부모객체로 찾으러간다. 만약 ,자식에게 동일한 getAge() 메서드가 있을경우 자식객체에서 호출해온다.
	}
}
