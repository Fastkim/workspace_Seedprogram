package ch07.ex01.case07;

public class Human {
	/*
	public void eat(Ramen ramen) {}
	public void eat(Kimchi kimchi) {}
	public void eat(Apple apple) {}
	*/
	// 과제: 위 세개 메서드를 한개로 줄여라.
	public void eat(Food food) { // 다형성을 파라미터에서 이용중. 다양한 값을 받아드릴수있다.
		System.out.println(food + "를 먹다.");
	}
}
