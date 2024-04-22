package ch05.ex01.case03;

public class Main {
	public static void main(String[] args) {
		User user = new User();
//		user.userName; // member variable이 private로 캡슐화 되어있다. 직접적으로 접근 불가능
		
		user.setUserName("최한석"); // setter method로만 입력가능, ex) 등본출력기능은 누구든 접근가능하지만 안의 내용물의 쓰기 읽기는 권한이 부여되야함.
		user.setAge(12);
		
		user.setUserName("한아름");
		user.setAge(43);
		
		System.out.printf("%s, %d\n", user.getUserName(), user.getAge());
	}
	
	// member variable == field
}
