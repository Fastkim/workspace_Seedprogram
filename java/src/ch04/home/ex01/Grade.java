package ch04.home.ex01;

import java.util.Scanner;

public class Grade {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int score = 0;
		int tenDigit = 0;
		int oneDigit = 0;
		String grade = "";
		
		System.out.print("점수: ");
		score = sc.nextInt();
		
		tenDigit = score / 10;
		oneDigit = score % 10;
		
		if(tenDigit >= 9) grade = "A";
		else if(tenDigit >= 8) grade = "B";
		else grade = "C";
		
		if(score >= 80) {
			if(oneDigit >= 8 || tenDigit == 10) grade += "+";
			else if(0 <= oneDigit && oneDigit < 4) grade += "-";
		}
		
		System.out.println(grade);
	}
}

// 김다훈의 코드
//Scanner sc = new Scanner(System.in);
//
//int score = 0;
//String grade = "";
//String superGrade = "";
//
//System.out.print("점수: ");
//score = sc.nextInt();
//
//if(score >= 90)
//	superGrade = "A";
//else if(score >= 80)
//	superGrade = "B";
//else
//	superGrade = "C";
//
//if(superGrade.equals("A")) {
//	if(score >= 98)
//		grade = superGrade + "+";
//	else if(score >= 94)
//		grade = superGrade + "";
//	else
//		grade = superGrade + "-";
//}
//else if(superGrade.equals("B")) {
//	if(score >= 88)
//		grade = superGrade + "+";
//	else if(score >= 84)
//		grade = superGrade + "";
//	else
//		grade = superGrade + "-";
//}
//else
//	grade = superGrade + "";
//
//System.out.print(grade);


/*
 다음 구간별로 학점을 부여하라.
 98 이상 A+
 94 이상 A
 90 이상 A-
 88 이상 B+
 84 이상 B
 80 이상 B-
 80 미만 C
 --
 
 점수: 100
 A+
 */
