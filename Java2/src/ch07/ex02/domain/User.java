package ch07.ex02.domain;

public class User { // domain : 추후에 실제 DB 테이블과 매핑시키는 클래스이다. Entity라고도 함.
	private String userName;
	
	public User(String userName) {
		this.userName = userName;
	}
	
	@Override
	public String toString() {
		return this.userName;
	}
}
