package ch08.ex05;

import java.util.logging.FileHandler;
import java.util.logging.Handler;
import java.util.logging.Logger;

public class C03FileLogger {
	private Logger logger;
	
	public C03FileLogger() {
		// getName() : 해당 logger 객체의 이름으로 사용
		this.logger = Logger.getLogger(this.getClass().getName()); // this.getClass() : 클래스타입의 객체가 리턴된다.
	}
	
	public void log() throws Exception {
		Handler handler = new FileHandler("c:/DEV/ch08.ex05.xml"); // FileHandler 타입은 xml파일을 생성
		logger.addHandler(handler);
		
		logger.info("로깅을 시작합니다.");
		logger.severe("예외가 발생했습니다.");
		logger.info("로깅을 끝냅니다.");
		
		handler.flush(); // flush() : handler 객체가 가지고있는 로그를 파일에 쏟아내자.
		handler.close();
	}
	
	// 과제: try{} 을 쓰지 않고, 아래 에러를 해결하라.
	public static void main(String[] args) throws Exception { // VM이 main을 call하고 main method를 처리
		new C03FileLogger().log();
	}
}
