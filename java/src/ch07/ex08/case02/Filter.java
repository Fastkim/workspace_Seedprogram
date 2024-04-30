package ch07.ex08.case02;

import java.util.stream.IntStream;

public class Filter {
	public static void main(String[] args) {
		IntStream stream = IntStream.range(1, 10); // 1이상 10미만
		
		stream.filter(i -> (i % 2) == 0) // 파라미터값이 true값이면 return; false면 버림.
			.forEach(System.out::println); // 100번 노동자를 필터링해서 이용
		System.out.println();
		
		stream = IntStream.range(1, 10);
		stream.filter(i -> i % 2 == 0) // filter는 return값이 boolean
			.map(i -> i * 10) // map은 return값이 int값을 return
			.forEach(System.out::println);
		// filter로 골라내고 map으로 가공한다.
	}
}
