package ch07.ex05.case07;

import java.util.HashMap;
import java.util.Map;

public class MyMap {
	public static void main(String[] args) {
		Map<Integer, User> map = new HashMap<>(); // list와 map은 key와 value가 있다. list : key 자동할당 , map : key 지정할당.
		
		map.put(1, new User("최한석"));
		map.put(2, new User("한아름"));
		map.put(3, new User("양승일"));
		System.out.println(map);
		
		User user = map.get(1);
		System.out.println(user);
		
		user = map.remove(1);
		System.out.println(map);
	}
}
