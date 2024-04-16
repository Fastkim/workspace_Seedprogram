package ch02.home.ex02;

import java.time.LocalDate;
import java.util.Scanner;

public class Reservation {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int year = 0;
		int month = 0;
		int day = 0;
		
		System.out.println("-----------------------");
		System.out.println("공연 일자를 입력하세요.");
		
		System.out.print("연: ");
		year = sc.nextInt();
		System.out.print("월: ");
		month = sc.nextInt();
		System.out.print("일: ");
		day = sc.nextInt();
		System.out.println("");
		
		LocalDate date = LocalDate.of(year,month,day);
		System.out.printf("%s 공연을 예매했습니다.\n",date);
		
		date = date.minusDays(3);
		System.out.printf("%s 까지 환불이 가능합니다.",date);
		
	}
}
/*
 과제: 예매하라. 환불은 공연일로부터 3일 전까지 가능하다.
 
 --
 공연 일자를 입력하세요.
 연: 2025
 월: 7
 일: 17
 
 2025-07-17 공연을 예매했습니다.
 2025-07-14 까지 환불이 가능합니다.
 */
