package ch07.ex03;

import ch07.ex03.dao.UserDao;
import ch07.ex03.dao.UserDaoImpl;
import ch07.ex03.io.Console;
import ch07.ex03.io.UserIo;
import ch07.ex03.service.UserService;
import ch07.ex03.service.UserServiceImpl;

public class Main { // main에서는 각 모듈을 조립한다.
	public static void main(String[] args) {
		UserDao userDao = new UserDaoImpl(); // dao 조립
		UserService userService = new UserServiceImpl(userDao); // Service 조립
		UserIo userIo = new UserIo(userService); // UserIo 조립.
		
		userIo.play();
		Console.info("끝.");
	}
}
