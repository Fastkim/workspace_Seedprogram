package ch07.ex02.io;

import ch07.ex02.service.UserService;

public class UserIo {
	private UserService userService;
	
	public UserIo(UserService userService) {
		this.userService = userService;
	}
	
	public void play() {
		Console.info(userService.getUser());
	}
}
// domain layer
// persistence layer dao 
// service layer service
// presentation layer // io interface를 만들지 않는다, presentation layer의 객체를 member variable로 가지고 있을 계층이 없기 때문이다.

// persistence layer <-> service layer <-> presentation layer
// 각 계층은 인접한 계층과만 대화한다.

// 객체와 객체가 대화를 한다 => 데이터를 주고받는다.
// 메서드를 콜하면서 파라미터로 전해주고 return 값으로 데이터를 내보낸다.