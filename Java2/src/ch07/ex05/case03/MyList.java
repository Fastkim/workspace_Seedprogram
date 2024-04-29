package ch07.ex05.case03;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MyList {
	public static void main(String[] args) { // List interface는 자식이 여러개 있지만 그 중 하나가 ArrayList
		List<Integer> list = new ArrayList<>();
		list.add(1); // add라는 method는 List라는 interface에 저장되어있지만, 오버라이드 규칙에 따라 ArrayList에서 실행
		list.add(2);
		list.add(3); // layberer 타입
		list.add(1); // list에서 데이터를 write할때는 add(insert)메서드 호출
		
		System.out.println(list);
		// [1, 2, 3, 1] key,value로 이루어졌다. key = index, key는 자동생성
		// List : interface, api 문서 : 호버 -> F2고정 -> open declaration
		
		for(int i: list) System.out.print(i + " "); // auto-unboxing : 객체였던것을 객체가 아닌것으로 만들어줌.
		System.out.println();
		
		System.out.println(list.get(0)); // list에서 데이터를 read할때는 get()
		
		for(int i = 0; i < list.size(); i++) // list에서 데이터가 유효한지 확인할때는 size가 0개인지 아닌지 확인.
			System.out.print(list.get(i) + " ");
		System.out.println();
		
		list.remove(1);
		System.out.println(list);
		
		list = new ArrayList<>(Arrays.asList(1, 2, 3, 1)); // asList() 파라미터가 숫자이므로 compiler가 Integer generic 타입으로 인식한것이다.
		for(int i = list.size() - 1; i >= 0; i--) // 리스트는 값을 삭제하면 뒤의 index값이 한칸씩 땡겨서 자리를 차지하기때문에, 뒤에서부터 remove한다.
			list.remove(i);
		System.out.println(list);
	}
}
