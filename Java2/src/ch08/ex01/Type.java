package ch08.ex01;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

// 나만의 Annotation(@) 만들기.

// interface -> lambda(@FunctionalInterface) 확장.
// interface -> @annotation으로 확장.

@Retention(RetentionPolicy.SOURCE) // .SOURCE : 소스코드인 구간에만 유지되고 클래스 파일이 되는 컴파일 과정에서 애노테이션 정보는 사라진다.
@Target(ElementType.TYPE)  // .TYPE: 탑입으로 사용  Target : 내가 만드는 annotation을 어느 멤버(클래스,메서드,variable)에 사용할지 설정.
public @interface Type { // annotation의 이름을 Type으로 만들어준것이다. @Type
	String name();
	int value(); // field를 추상메서드 형태로 쓴다.
}

@Retention(RetentionPolicy.CLASS) // .CLASS : 클래스 파일이 되는 컴파일과정까지 정보가 유지된다.
@Target(ElementType.FIELD)
@interface Field {
	int value();
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.CONSTRUCTOR)
@interface Constructor { // 생성자 annotation
	int value() default 0;
}

// @Retention 지정하지 않으면 RUNTIME이 기본값
@Target(ElementType.METHOD)
@interface Method {
	
}

@Target(ElementType.PARAMETER)
@interface Param {
	
}

@Annotation
@Target(ElementType.LOCAL_VARIABLE)
@interface Local {
	
}

@Target(ElementType.ANNOTATION_TYPE)
@interface Annotation {
	
}

@Target({ElementType.TYPE, ElementType.FIELD})
@interface Universal {
	
}