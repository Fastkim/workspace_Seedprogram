package ch07.ex08.case04;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Colon { //(Colon) :: method reference expression, 즉 메서드를 지칭한다.
	public static void main(String[] args) {
		List<User> users = Arrays.asList(
				new User("최한석"),
				new User("한아름"),
				new User("양승일"));
		
		users.forEach((user) -> System.out.print(user));
		System.out.println();
		
		Colon colon = new Colon();
		users.stream().map(user -> colon.addTitle(user))
			.forEach(System.out::print);
		System.out.println();
		
		List<String> userNames = Arrays.asList("최한석", "한아름", "양승일");
		users = userNames.stream() // String 원소들을 stream에 담은후
				.map(userName -> new User(userName)) // 객체로 가공한후에
				.collect(Collectors.toList()); // List 타입의 array에 담는다.
		System.out.println(users);
		
		users = userNames.stream()
				.map(User::new) // User라는 클래스에 있는 생성자메서드
				.collect(Collectors.toList());
		System.out.println(users);
	}
	
	public String addTitle(User user) {
		return user + "님";
	}
	
	public static String addHonor(User user) {
		return user + "씨 ";
	}
}

