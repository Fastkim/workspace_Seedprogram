package ch06.ex07.case01;

public sealed class Pet permits Dog, Cat {
	// sealed class는 자식이 Dog, Cat 뿐이야, 즉 상속의 범위와 경계선을 설정하는것이다.
}
