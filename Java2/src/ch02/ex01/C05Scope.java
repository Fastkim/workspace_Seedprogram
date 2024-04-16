package ch02.ex01;

public class C05Scope {
	public static void main(String[] args) {
		int i = 0;
//		int i = 0;
		int j = 0;
		{
//			int i = 0;
			int x = 0;
			int y = 0;
		} // variable 생성은 stack형식으로 생성된다.
		int x = 0;
	}
}
