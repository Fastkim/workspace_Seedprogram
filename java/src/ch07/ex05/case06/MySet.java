package ch07.ex05.case06;

import java.util.HashSet;
import java.util.Set;

public class MySet {
	public static void main(String[] args) {
		Set<Integer> set = new HashSet<>();
		
		set.add(1);
		set.add(2);
		set.add(3);
		set.add(1);
		
		System.out.println(set); // Set은 key가 없으므로 중복값을 표현할 수 없다.
	}
}
