package ch04.home.ex02;

import java.util.Random;
import java.util.Scanner;

public class H05Kawibawibo {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int playerChoice = 0;
		int appChoice = 0;
		String result = "";
		String choice = "";
		
		System.out.print("1.가위, 2.바위, 3.보\n>");
		playerChoice = sc.nextInt();
		appChoice = new Random().nextInt(3) + 1; // Random().nextInt(3) + 1 : 1이상 ~ 4미만의 값
		System.out.println(appChoice);
		
		if(1 <= playerChoice && playerChoice <= 3) {
			result = switch(playerChoice - appChoice) {
			case -2, 1 -> "You win."; // playerChoice = 1 : appChoice = 3, playerChoice = 2 : appChoice = 1
			case -1, 2 -> "You lose."; // playerChoice = 1 : appChoice = 2, playerChoice = 3 : appChoice = 1
			default -> "Faire"; // 나머지
			};
			
			
			choice = switch(playerChoice) {
			case 1 -> "가위";
			case 2 -> "바위";
			default -> "보";
			};
			System.out.println("Me: " + choice);
		}else result = "ERROR] 1, 2, 3 중에서 입력하세요.";
		
		System.out.println("\n" + result);
	}
}
