package ch04.ex03;

public class C02DrawingLots {
	public static void main(String[] args) {
		int random = 1;
		int pickCnt = 0;
		
		// 과제: 조건문을 채워라. 3의 배수를 뽑을 때까지 제비를 돌려라.
		
		while(!(random % 3 == 0)) {
			random = (int)(Math.random() * 100) + 1;
			pickCnt++;
		}
		
		System.out.printf("%d번 뽑아서 %d를 찾았습니다.", pickCnt, random);
	}
}
