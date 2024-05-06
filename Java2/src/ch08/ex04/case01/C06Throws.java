package ch08.ex04.case01;

public class C06Throws {
	public void first() {
		this.second();
	}
	/*
	public void second() {
		this.third();
	}
	*/
	
	public void second() {
		try {
			this.third();
		} catch(Exception e) {
			System.out.println("second()");
		}
	}
	
	/*
	public void third() {
		int i = 3 / 0;
	}
	*/
	
	public void third() throws Exception {
		// throws Exception : 호출하는측에 강력한 Exception경고를 날리고, try 구문을 강제한다.
		int i = 3 / 0;
	}
	
	public static void main(String[] args) {
		new C06Throws().first(); //여기서 앱이 죽는다.
		System.out.println("end."); // 17코드에서 앱이죽었으므로 print문 출력안됨.
		// exception의 종착지는 VM이 되었고 exception 처리를 하였다.
	}
}
