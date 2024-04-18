package ch04.ex01;

public class C01If {
	public static void main(String[] args) {
		int visitedCnt = 0;
		
		if(visitedCnt < 1) {
			System.out.println("첫방문입니다.");
		}
		
		System.out.println(visitedCnt);
		
		if(visitedCnt < 1)
			System.out.println("첫방문입니다."); // 단락이 한개면 블록기호{} 생략가능
	}
}
