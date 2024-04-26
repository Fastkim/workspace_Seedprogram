package ch07.ex02.io;

public interface Console { // 앱의 가장 표면을 담당하는 부분으로 사용자로부터 정보를 직접 입력받는 부분
	static void info(Object obj) {
		System.out.println(obj);
	}
}
