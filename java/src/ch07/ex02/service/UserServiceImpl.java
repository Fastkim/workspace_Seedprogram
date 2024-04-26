package ch07.ex02.service;

import ch07.ex02.dao.UserDao;
import ch07.ex02.domain.User;

public class UserServiceImpl implements UserService {
	private UserDao userDao; // Dao가 dependency 객체 이므로 멤버변수로 두었다. 그리고 interface이름으로 멤버변수를 둔다. 이는 유지보수를 위한 이유
	
	
	public UserServiceImpl(UserDao userDao) {
		this.userDao = userDao;
	}
	// DI(Dependency Injection) : dependency 객체에 값을 넣는것, 초기화하는것을 말한다. (의존성 주입)
	// DI 방법 : setter, 생성자
	
	@Override
	public User getUser() {
		return userDao.selectUser();
	}
}

// persistence layer // 데이터를 모아둔 영역을 말한다. dao
// service layer // 데이터를 불러와 알고리즘처리를 한이후 내보내는 영역을 말한다. service
// presentation layer // 서비스처리된 데이터를 출력하는 영역을 말한다. Io
