package ch06.ex06.case07;

public class Main {
	public static void main(String[] args) {
		int val = 1;
		
		switch(val) { // 가독성이 안좋음.
		case 1 -> val++;
		case 2 -> val++;
		}
		
		switch(val) { // 가독성이 좋음. 권장.
		case Code.USER_ADD -> val++;
		case Code.USER_DEL -> val++;
		}
	}
}
