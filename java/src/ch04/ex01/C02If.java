package ch04.ex01;

public class C02If {
	public static void main(String[] args) {
		int visitedCnt = 0;
		
		if(visitedCnt < 1) {
			System.out.println("첫방문입니다.");
			visitedCnt++;
		} else {
			System.out.println("재방문입니다.");
		}
		
		if(visitedCnt < 1) {
			System.out.println("첫방문입니다.");
			visitedCnt++;
		} else 
			System.out.println("재방문입니다."); // 단락일때 블록기호 생략
	}
}
