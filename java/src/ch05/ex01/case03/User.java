package ch05.ex01.case03;

public class User { // 클래스는 데이터 타입이다.(각인)
	private String userName; // 캡슐화 : private(숨김) , getter, setter method로만 읽기쓰기함.
	private int age; // memberVarable 
	
	public String getUserName() { //member method, Getter, 모든 멤버메서드는 parameter에 this가 생략되어있음.
		return userName;
	}
	
	public void setUserName(String userName) { // VM은 method name과 parameter로 구분해서 해석함, Setter
		this.userName = userName;
	}
	
	public int getAge() {
		return age; // parameter ager가 없네, member variable이겠구나 => compiler가 자동으로 해석함.
	}
	
	public void setAge(int age/* local variable */) {
		this.age = age;
	}
	
	// 앱은 객체의 집합이다.
}


