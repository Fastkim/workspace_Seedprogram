package ch08.ex04.case01;

import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class C03Try {
	public static void main(String[] args) {
		PrintWriter out = null;
		int[] arr = {1, 2, 3};
		
		// IO(데이터가 외부파일과 교류하는)와 관련된 logic은 try를 꼭 사용해야한다.
		
		try { // wrapping: 케익은 손으로 들고갈수없는데 상자로 랩핑해서 들고갈수있다. PrintWriter의 기능을 쓰기위해서 wrapping 한다.
			out = new PrintWriter(new FileWriter("c:/DEV/a.txt"));
			for(int i: arr) out.println("arr[" + i + "]" + arr[i]);
		} catch(ArrayIndexOutOfBoundsException e) {
			out.println("array error.");
		} catch(IOException e) { // catch절은 여러개 생성 가능
			System.out.println("IO error.");
		} finally { // try,catch 실행여부와 상관없이 반드시 실행되는 블록
			if(out != null) out.close(); // 객체에 저장되는 local variable이 없으면 garbage collector가 청소한다.
		}
	}
}

// accelator : 젠슨황(GPU)