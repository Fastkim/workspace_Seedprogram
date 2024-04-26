package ch07.ex02.service;

import ch07.ex02.domain.User;

public interface UserService {
	public User getUser();
}

//출근 9시에 했다. write는 dao에 있어야한다.
//출근 9시에 했다. read는 dao에 있어야한다.
//Dao 는 Service의 dependency 객체이다.
//Dao 는 Service의 member variable
