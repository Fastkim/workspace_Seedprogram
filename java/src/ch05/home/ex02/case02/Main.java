package ch05.home.ex02.case02;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String message = null;
        String authorName = null;
        Boolean isValid = false;

        do {
			System.out.print("메세지: ");
			message = sc.nextLine();
			isValid = message.matches("[a-zA-Z가-힣]+");
			if(!isValid) System.out.println("ERROR] 메세지를 문자열로 입력하세요.");
		} while(!isValid);

        isValid = false;
        
        do {
			System.out.print("작성자명: ");
			authorName = sc.nextLine();
			isValid = authorName.matches("[a-zA-Z가-힣]+");
			if(!isValid) System.out.println("ERROR] 작성자명을 문자열로 입력하세요.");
		} while(!isValid);

        Note note = new Note();
        note.setMessage(message);
        note.setAuthor(authorName);
        System.out.printf("%s from %s", message, authorName);
   
    }
}
