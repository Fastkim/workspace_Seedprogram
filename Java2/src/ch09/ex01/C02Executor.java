package ch09.ex01;

import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

public class C02Executor { // Runnable 타입으로 thread를 실행시켜보자.
	public static void main(String[] args) {
		Runnable r1 = () -> {
			for(int i = 0; i < 10; i++)
				System.out.print(i + " ");
		};
		
		Runnable r2 = () -> {
			for(char c = 'a'; c <= 'z'; c++)
				System.out.print(c + " ");
		};
		
		Executor executor = Executors.newCachedThreadPool(); // pool이라는 단어가 포함되어있다면 n개가 모여있다라고 연상
		executor.execute(r1); // thread r1 작동
		executor.execute(r2); // thread r2 작동
	}
}
