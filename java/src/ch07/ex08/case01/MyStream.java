package ch07.ex08.case01;

import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class MyStream {
	public static void main(String[] args) {
		List<Integer> list = Arrays.asList(1, 2, 3);
		Stream<Integer> stream = list.stream(); // list를 stream으로 변환
		
		Integer[] arr = {1, 2, 3};
		stream = Arrays.stream(arr);
		
		stream = Arrays.stream(arr, 1, 3); // stream 변환 범위 지정 (index 1이상 3미만)
		
		stream = Stream.<Integer>builder() // Factory method, builder 패턴 : 객체생성 패턴
				.add(1)
				.add(2)
				.add(3) // member field값을 지정한다음.
				.build(); // build
		
		stream = Stream.iterate(1, i -> i + 1).limit(3); // 시작값: 1 / 2 3
		
		stream = Stream.generate(() -> 1).limit(3); // 1 1 1 
		
		//stream.forEach(System.out::println); // println이라는 static method
		
		// 노동자ID : ++, 또는 stream을 쓸수있다.
		// for문 대신 stream 활용
		
		IntStream stream2 = IntStream.range(1, 4); // 1이상 4미만
		stream2 = "abc".chars(); // 문자열을 유니코드값으로 return 해주는 메서드
		
		//stream2.forEach(System.out::println);
		
		Stream<String> stream3 = Pattern.compile(",").splitAsStream("cat,dog,lion"); // 문자열을 받아서 ,로 구분짓는다.
		stream3.forEach(System.out::println);
		
		// list,Array,stream 1차원 데이터저장
		// list,Array는 for문으로 생성했는데, stream을 이용하면 range로 값을 만들어줄수있다.
	}
}
