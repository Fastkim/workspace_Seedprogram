package ch07.ex03.dao;

import ch07.ex03.domain.User;

public interface UserDao { // interface 왜 만드나요 UserDao가 dependency이기때문에 그렇습니다.
	public User selectUser();  //CRUD
	public void insertUser(User user);
	public void updateUser(String userName);
	public void deleteUser();
}
