package ch07.ex02.dao;

import ch07.ex02.domain.User;

public class UserDaoImpl implements UserDao {
	@Override
	public User selectUser() {
		return new User("최한석");
	}
	// dao(data access object)는 data access login을 가지고있다.
}
