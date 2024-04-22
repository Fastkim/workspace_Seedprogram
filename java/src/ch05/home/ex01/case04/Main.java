package ch05.home.ex01.case04;

import java.time.LocalDate;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		String userName = "";
		int age = 0;
		String tmp = "";
		boolean isGood = false;
		LocalDate regDate  = null;
		
		Scanner sc = new Scanner(System.in);
		User user = new User();
		LocalDate localDate = LocalDate.now();
		
		do {
			System.out.print("이름: ");
			tmp = sc.nextLine();
			isGood = tmp.matches("[a-zA-Z가-힣]+"); // 알파벳, 한글이 최소 한자리 이상이어야한다는 조건을 의미
			if(!isGood) System.out.println("이름은 한자리 이상의 한글또는 알파벳이어야 합니다.");
			else user.setUserName(tmp);
		} while(!isGood);
		
		
		do {
			System.out.print("나이: ");
			tmp = sc.nextLine();
			isGood = tmp.matches("[0-9]+");
			if(!isGood) System.out.println("나이는 한자리 이상 자연수이어야 합니다.");
			else user.setAge(Integer.parseInt(tmp));
		} while(!isGood);
		
		user.setRegdate(localDate.now());
		
		System.out.println();
		System.out.printf("이름: %s\n", user.getUserName());
		System.out.printf("나이: %d\n", user.getAge());
		System.out.printf("가입일: %s\n", user.getRegDate());
	}
	// presentation logic 
}
/*
과제: 사용자를 생성하라.
user가 user의 이름, 나이를 수동 입력한다.
app이 user의 가입일을 자동 입력합니다.
--

이름: gambit
나이: 25

이름: gambit
나이 25
가입일: 2024-04-22
*/