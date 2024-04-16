package ch02.ex02;

public class C04String {
	public static void main(String[] args) {
		String s = "|" + " a happy ".trim() + "|"; // trim : 공백제거 api
		s = s.concat(" dog");
		s = s.substring(2); // index 부터 출력
		System.out.println("s: " + s);
		
		s = "hello";
		System.out.printf("%c\n", s.charAt(1));
		
		int i = "apple".codePointAt(0); // parameter index에 해당하는 자리의 문자의 10진수 유니코드값을 retrun
		i = "a".hashCode(); // 앞의 문자를 unicode로 변환하는 hashCode()
		i = "b".hashCode();
		i = "b".compareTo("a"); // unicode 값을 서로 비교해서 값의 차이를 return
		i = "a".compareTo("b");
		i = "A".compareTo("a");
		i = "A".compareToIgnoreCase("a"); // physical하게 대소문자 구별없이 비교
		i = s.indexOf("l"); // "l" 문자를 첫번째로 가지고있는 index를 return
		i = s.lastIndexOf("l"); // "l" 문자를 마지막으로 가지고 있는 index를 return
		i = s.length(); // 문자열 길이 return
		System.out.println("i: " + i);
		
		s = "develop";
		boolean b = s.startsWith("de"); // 문자열이 "de"로 시작하는지 물어보는 api
		b = s.endsWith("lop"); // parameter 문자열로 끝나는지 확인
		b = s.equals("develop");
		b = s.equalsIgnoreCase("Develop"); // 대소문자 구분없이 같은지
		b = "".isEmpty();
		b = s.matches("[a-zA-Z]*"); // a~z,A~Z까지 문자가 포함되어있는지
		b = s.matches("[0-9]*"); // 숫자로만 되어있는 문자열인지
		System.out.println("b: " + b);
	}
}
