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
		} // varable 생성은 stack 형식으로 쌓인다.
		int x = 0;
	}
}
