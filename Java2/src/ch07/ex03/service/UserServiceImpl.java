package ch07.ex03.service;

import ch07.ex03.dao.UserDao;
import ch07.ex03.domain.User;

public class UserServiceImpl implements UserService{
	private UserDao userDao;
	
	public UserServiceImpl(UserDao userDao) { // UserDao로부터 데이터를 받아온다.
		this.userDao = userDao;
	}
	
	@Override
	public User getUser() {
		return userDao.selectUser();
	}
	
	@Override
	public void addUser(User user) {
		userDao.insertUser(user);
	}
	
	@Override
	public void fixUser(String userName) {
		userDao.updateUser(userName);
	}
	
	@Override
	public void delUser() {
		userDao.deleteUser();
	}
}
