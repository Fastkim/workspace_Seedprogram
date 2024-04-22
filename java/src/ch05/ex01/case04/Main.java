package ch05.ex01.case04;

public class Main {
	public static void main(String[] args) {
		User user = new User(); // 객체선언
		user.setUserName("최한석"); // 첫자리가 '최'이므로 setter method 수행 가능
		user.setUserName("한아름"); // 첫자리가 '한'이므로 setter method 에서 else부분 수행
		
		System.out.println(user.getUserName());
	}
}
