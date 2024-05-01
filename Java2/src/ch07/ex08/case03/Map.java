package ch07.ex08.case03;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

public class Map { // public은 파일명에 일치하는 class에만 붙인다.
	public static void main(String[] args) {
		List<User> users = Arrays.asList(
				new User("최한석"),
				new User("한아름"),
				new User("양승일"));
		
		Set<String> userNames = users.stream()
				.map(user -> user.getUserName()) // 가공하고
				.collect(Collectors.toSet()); // Setting하고 .. Set 타입으로 만들어준다.
		
		userNames.forEach(System.out::println);
		System.out.println();
		
		users.stream().map(new Function<User, String>(){ //<User 타입 파라미터, String 타입 return> functionalInterface를 만드는 것이다.
			@Override
			public String apply(User user) {
				return user.getUserName();
			}
		}).collect(Collectors.toList())
			.forEach(System.out::print);
		System.out.println();
		
		Integer[][] arr = { // 2차원 배열
				{1, 2, 3},
				{4, 5, 6}
		};
		
		Arrays.stream(arr)
			.flatMap(inner -> Arrays.stream(inner)) // flatMap => 납작하게 가공해버려
			.forEach(System.out::print);
	}

}

class User { // 유지보수가 불편해지므로 파일하나에 class 하나를 권장한다, 내부클래스
	private String userName;
	
	public User(String userName) {
		this.userName = userName;
	}
	
	public String getUserName() {
		return this.userName;
	}
}
