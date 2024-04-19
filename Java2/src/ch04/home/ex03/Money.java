package ch04.home.ex03;

public class Money {
	public static void main(String[] args) {
		int price = 30000;
		int tot = 0; // 꺼낸 돈 누적액
		int tmp = 0;
		
		while(tot < price) {
			tmp = ((int)(Math.random() * 30) + 1) * 1000;
			System.out.println(tmp);
			tot += tmp;
		}
		System.out.printf("\n%d원을 꺼냈습니다." , tot);
	}
}
/*
과제: 3만원짜리 물건값을 치뤄라.

지갑에서 지폐를 여러번 꺼낸다.
지갑에 5만원은 없다.
꺼낸 돈의 권을 구별하지 않는다.
꺼낸 돈은 3만원 이하이다.
콘솔엔, 지갑에서 꺼낸 금액을 매번 출력한다.
 */