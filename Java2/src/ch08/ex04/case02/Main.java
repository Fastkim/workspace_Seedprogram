package ch08.ex04.case02;

public class Main {
	public static void main(String[] args) {
		String userId = "gambit";
		
		try {
			if(userId.length() > 3)
				throw new LengthException("문자 길이가 초과되었습니다."); // Exception 타입일 경우 try블록을 필수적으로 써야함.
		} catch(LengthException e) {
			e.printStackTrace();
		}
		
		throw new NumberException("숫자가 아닙니다."); // RuntimeException 타입일경우 try블록을 안써도 됨.
	}
}
