package ch07.ex08.case05;

public record Dog(String dogName, int age) { // record 도 클래스이다. record : table에서 가로한줄, record는 바뀌지않는다.
	// record는 member variable을 파라미터로 준다.
	// record는 static method를 사용
	public static void print(String dogName, int age) {
		System.out.printf("My dog %s is %d old.\n", dogName, age);
	}
}

// OR mapping : Object Record mapping 
// DB에서는 행 한줄을 레코드로, 자바에서는 객체로 취급, 그 두개를 연결하는 과정때 record 다시 등장.
