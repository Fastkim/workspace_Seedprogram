package ch07.ex07.case01;

@FunctionalInterface //lambda 용 interfcae라는것을 표시해준다.
public interface Human {
	void say();
	// void tell();  // functionalInterface는 한개의 추상메서드만 존재해야한다.
}

//arrow function =>  function도 데이터이다.
//lambda => 메서드도 데이터이다.