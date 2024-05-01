package ch08.ex01;

@Universal
@Type(name="class", value=1) // Type의 name 속성값, value 속성값을 넣어준것이다, 클래스 annotation 만듬.
public class MyClass {
	@Field(1) // 속성 value가 하나만 필요할경우 (value=) 생략가능
	private String myName;
	
	@Constructor // value 속성값을 따로 지정하지않으면 0이 된다.
	public MyClass() {}
	
	@Method
	public void play(@Param String userName,@Param int age) {
		@Local int i = 0;
	}
}
