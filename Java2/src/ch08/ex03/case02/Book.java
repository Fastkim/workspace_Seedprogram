package ch08.ex03.case02;

import java.time.LocalDate;

public class Book { // record 타입을 컴파일했을때를 javac를 따라해보자.
	private final String title;
	private final int price;
	private final LocalDate printedDate;
	
	public Book(String title, int price, LocalDate printedDate) { // 생성자는 객체 호출했을때 write작업을 딱 한번 수행한다.
		this.title = title;
		this.price = price;
		this.printedDate = printedDate;
	}
	
	@Override
	public final String toString() {return null;}
	
	@Override
	public final int hashCode() {return 0;}
	
	@Override
	public final boolean equals(Object o) {return false;}
	
	public String title() {return null;}
	public int price() {return 0;}
	public LocalDate printedDate() {return null;}

}
