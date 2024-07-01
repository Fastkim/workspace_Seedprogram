package config;

import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class Configuration {
	private static SqlSessionFactory sqlSessionFactory;
	
	static {
		try {
			Reader reader = Resources.getResourceAsReader("config/sqlMapConfig.xml"); // reader 객체가 환경설정을 파악
			sqlSessionFactory  = new SqlSessionFactoryBuilder().build(reader); // conn : 물리적인관점, session : 논리적인관점. 1개의 connection의 n개의 session 가능
//			InputStream stream = Resources.getResourceAsStream("config/sqlMapConfig.xml");
//			sqlSessionFactory = new SqlSessionFactoryBuilder().build(stream, "hr"); // hr 명시안하면 default값을쓰기때문에 명시해준다.
		} catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	public static <T> T getMapper(Class<T> arg) {
		return sqlSessionFactory.openSession(true).getMapper(arg);
	}
}
