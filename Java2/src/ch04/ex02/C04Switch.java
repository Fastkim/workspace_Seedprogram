package ch04.ex02;

public class C04Switch {
	public static void main(String[] args) {
		String comment = "ab";
		
		String msg = switch(comment.length()) {
		case 1 -> "too short.";
		case 2 -> "good.";
		default -> "too long.";
		};
		System.out.println(msg + "\n");
		
		msg = switch(comment.length()) {
		case 1 -> comment + "too short.";
		case 2 -> {
			String message = comment + " is good.";
			yield message; // 블럭 내부에서 return 값을 만들고 싶을때
		}
		default -> {yield comment + " is too long";}
		};
		System.out.println(msg + "\n");
	}
}
