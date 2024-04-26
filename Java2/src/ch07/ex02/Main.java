package ch07.ex02;

import ch07.ex02.dao.UserDao;
import ch07.ex02.dao.UserDaoImpl;
import ch07.ex02.io.Console;
import ch07.ex02.io.UserIo;
import ch07.ex02.service.UserService;
import ch07.ex02.service.UserServiceImpl;

public class Main {
	public static void main(String[] args) { // 여기서는 각 레이어의 객체를 조립한다.
		UserDao userDao = new UserDaoImpl();
		UserService userService = new UserServiceImpl(userDao); // userService has a userDao
		UserIo userIo = new UserIo(userService);
		
		Console.info("start");
		userIo.play();
		Console.info("end");
	}
}
