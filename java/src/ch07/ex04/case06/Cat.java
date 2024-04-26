package ch07.ex04.case06;

public class Cat extends Object implements Animal { // Object은 생략되어도 자동생성해준다 compiler가
	private String catName;
	
	public Cat(String catName) {
		this.catName = catName;
	}
	
	@Override
	public String toString() {
		return this.catName;
	}
}
