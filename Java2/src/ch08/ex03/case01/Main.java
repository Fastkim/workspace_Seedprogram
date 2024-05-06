package ch08.ex03.case01;

import java.time.LocalDate;

public class Main {
	public static void main(String[] args) {
		// setter가 아닌 생성자로 write를 한다는것은 데이터를 변경하지않는다는 의미이다.
		Book book = new Book("불편한편의점", 20000, LocalDate.of(2022, 5, 7)); // 레코드 생성
		Book book2 = new Book("불편한편의점", 20000, LocalDate.of(2022, 5, 7));
		
		System.out.println(book.toString()); // domain을 record로 하면 toString을 자동으로 만들어준다.
		
		System.out.println(book.hashCode());
		System.out.println(book == book2);
		System.out.println(book.equals(book2)); // 주소는 다르지만, 논리적인 필드는 동일하다.
		
		System.out.printf("%s %d %s", book.title(), book.price(), book.printedDate()); // read는 필드이름을 가진 메서드로 하고있다.
		
	}
}
