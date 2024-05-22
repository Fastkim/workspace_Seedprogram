package ch05.ex02;

import ch05.domain.Post;
import ch05.domain.Search;
import ch05.domain.User;
import config.Configuration;

public class Main {
	public static void main(String[] args) {
		Map mapper = Configuration.getMapper(Map.class);
		
//		sqlMap.xml에서 bind를 사용할때 접두사(post)가 null이 아니여야된다가 전제되어야한다.
		User user = mapper.selectUser(new Search("john", new Post(null, null)));
//		user = mapper.selectUser(new Search("john", new Post("정의", null)));
//		user = mapper.selectUser(new Search("john", new Post(null, "고리")));
		
		System.out.println(user);
	}
}
