package ch05.ex04.case01;

public class Main {
	public static void main(String[] args) {
		System.out.printf("%d, %d\n", Card.width, Card.height); //static variable도 member variable이므로 VM이 초기값 int = 0을 설정해준다.
		
		Card.width = 10;
		Card.height = 20;
		
//		Card.kind;  , instance variable이므로 클래스로 호출 불가능
//		Card.number;
		
		Card card1 = new Card(); // 객체생성
		Card card2 = new Card();
		
		card1.kind = "heart";
		card1.number = 7;
		
		card2.kind = "spade";
		card2.number = 4;
		
		System.out.printf("%s %d %d %d\n", card1.kind, card1.number, card1.width, card1.height);
		System.out.printf("%s %d %d %d\n", card1.kind, card1.number, Card.width, Card.height);
		System.out.printf("%s %d %d %d\n", card1.kind, card1.number, card2.width, card2.height);
	}
}
