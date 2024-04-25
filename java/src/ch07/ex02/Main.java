package ch07.ex02;

import java.io.Console;

import ch07.ex02.dao.UserDao;
import ch07.ex02.dao.UserDaoImpl;
import ch07.ex02.io.UserIo;
import ch07.ex02.service.UserService;
import ch07.ex02.service.UserServiceImpl;

public class Main {
	public static void main(String[] args) {
		UserDao userDao = new UserDaoImpl();
		UserService userService = new UserServiceImpl(userDao); // userService has a userDao
		UserIo userIo = new UserIo(userService);
		
		Console.cla;
//		userIo.play();
//		Console.("end.");
	}
}
