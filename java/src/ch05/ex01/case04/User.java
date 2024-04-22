package ch05.ex01.case04;

public class User {
	private String userName;
	
	public void setUserName(String userName) { // setter method에 "쓰기"수행을 위한 조건을 추가해보기
		char familyName = userName.charAt(0);
		
		if(familyName == '최')
			this.userName = userName;
		else this.userName = "누구세요";
	}
	
	public String getUserName() {
		return this.userName;
	}
}
