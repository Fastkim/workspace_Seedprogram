package ch08.ex05;

import java.util.logging.Logger;

public class C01MyLogger {
	public static void main(String[] args) {
		Logger.getGlobal().info("hello"); // log에도 level을 나눈다, info() 메서드를 사용해서 정보 : 라는 콘솔이 등장
	}
}
