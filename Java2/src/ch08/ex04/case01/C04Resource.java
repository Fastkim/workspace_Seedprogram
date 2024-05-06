package ch08.ex04.case01;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class C04Resource { // 앱 외부에 있는 데이터를 resource라고 한다.
	public static void main(String[] args) {
		int[] arr = {1, 2, 3};
		
		try ( // {} -> ()로 변경, close()메서드로 IO객체를 종료하지않아도 종료해준다.
				PrintWriter out1 = new PrintWriter(new FileWriter("c:/DEV/1.txt")); //io와 관련된 명령문
				PrintWriter out2 = new PrintWriter(new FileWriter("c:/DEV/2.txt"));
		){ // try resource라는 문법
			for(int i = 0; i< arr.length; i++) {
				out1.println("arr[" + i + "]" + arr[i]);
				out2.println("arr[" + i + "]" + arr[i]);
			}
		} catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("array error.");
		} catch(IOException e) {
			System.out.println("IO error.");
		}
		
		System.out.println("end.");
	}
}
