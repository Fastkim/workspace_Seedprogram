package ch08.ex04.case01;

public class C01NoTry {
	public static void main(String[] args) {
		int[] arr = new int[10];
		int result = arr[10]; // compiler는 에러아님, VM에서 에러발생
		
		System.out.println("end."); // app이 죽기때문에 실행되지않음
	}
}
// exception 처리의 목적은 앱을 살리는것.
// exception이 발생하면 VM은 앱을 죽여버림.
// exception error는 웹앱에서는 큰 문제는 아니지만 native app에서는 큰 문제.
