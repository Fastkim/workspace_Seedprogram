package ch02.ex01;

public class C02Output {
	public static void main(String[] args) {
		int score = 100;
		System.out.println(100); // println: 줄바꿈도 포함
		System.out.println(score);
		System.out.println(100 + 1); // expression
		System.out.println(Math.random()); // 0.0 이상 1.0미만 double 타입 리턴
		
		System.out.print(200); // api : 공개된 library를 의미한다.
		System.out.print(300); // print : 줄바꿈이 없음.
		System.out.print('\n'); // \n : 줄바꿈, single quotation : '' = char, double quotation: "" = string
		System.out.print(400);
		System.out.println(); // 한줄 띄우기
		
		System.out.printf("%b %c %d %f %s\n", true, 97, 10, 1.15, "hello"); // printf(printfformat), space로 구분한상태
		// 과제: 위 출력문에서 구분자로 '/'를 사용하라.
		System.out.printf("%b/%c/%d/%f/%s", true, 97, 10, 1.15, "hello"); // /로 구분한상태
		
		String myName = "최한석";
		int age = 22;
		System.out.printf("%s %d", myName,age);
		System.out.printf("\n%s은 %d살입니다.", myName, age);
		System.out.println();
		System.out.println(myName + "은 " + age + "살입니다.");   
	}
}
