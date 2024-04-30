package ch07.ex08.case04;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Colon { //(Colon) :: method reference expression , 즉 메서드를 지칭한다.
	public static void main(String[] args) {
		List<User> users = Arrays.asList(
				new User("최한석"),
				new User("한아름"),
				new User("양승일"));
		
		users.forEach(user -> System.out.print(user));
		System.out.println();
		
		users.forEach(System.out::print); // method reference expression : 문법이름, ::메서드이름
		System.out.println();
		
		Colon colon = new Colon();
		users.stream().map(user -> colon.addTitle(user))
			.forEach(System.out::print);
		System.out.println();
		
		users.stream().map(colon::addTitle)
			.forEach(System.out::print);
		System.out.println();
		
		List<String> userNames = Arrays.asList("최한석", "한아름", "양승일");
		users = userNames.stream()
				.map(userName -> new User(userName))
				.collect(Collectors.toList());
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
