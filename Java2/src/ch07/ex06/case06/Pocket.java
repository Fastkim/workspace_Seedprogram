package ch07.ex06.case06;

import java.util.List;

public class Pocket {
	{ // instance block
		int i = 1 + 2;
		double d = 1.0 + 2.0;
		i = new Integer(1) + new Integer(2); // 연산이 가능함.
		d = new Double(1.0) + new Double(2.0); // 노란줄을 권장하지 않지만 연산은 가능하다.
		
		// new Number(1) + new Number(2); // Integer와 Double의 부모타입(Number)으로 연산은 불가능, Double인지 int인지 확인이안되.
 	}
	
	public void printList(List<?> list) { // parameter로 정수 리스트만 받을 수 있다. 정수, 실수 둘다 받고싶다면 Number 타입으로
		// generic type을 사용하는시점에 타입을 결정하지않겠다. wild card : ?
		System.out.println(list);
	}
	
	public double add(List<? extends Number> list) { // wild card 범위를 Number타입 이하로 설정, extends : 이하
		double sum = 0;
		for(Number n: list) sum += n.doubleValue(); // doubleValue() => Number타입값을 Double 타입값으로 변환하여 연산
		return sum;
	}
	
	public List<? super Integer> add2(List<? super Integer> list){
		return list;
	}
}
