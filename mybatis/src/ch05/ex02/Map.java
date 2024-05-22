package ch05.ex02;

import ch05.domain.Search;
import ch05.domain.User;

public interface Map {
	User selectUser(Search search);
	// 리턴값 : user, null
}
