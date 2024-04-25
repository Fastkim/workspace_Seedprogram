package ch06.ex04.case01;

public class Cat extends Animal {
	private int age;
	
	public Cat(String catName, int age) {
		super(catName); // super 객체로 부모 variable을 초기화
		this.age = age; // cat 객체의 variable 초기화
	}
	
	public int getAge() {
		return this.age;
	}
	
	@Override
	public String toString() {
		return String.format("%s %d", this.getAnimalName(), this.getAge());
	}
}
