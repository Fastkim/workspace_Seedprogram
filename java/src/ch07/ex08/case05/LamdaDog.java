package ch07.ex08.case05;

// dog을 record 형태로, lambda 형태로 만들어보는것이다.

@FunctionalInterface
public interface LamdaDog {
	public void print(String dogName, int age);
}
