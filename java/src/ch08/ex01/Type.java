package ch08.ex01;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
// 나만의 Annotation(@) 만들기.


// interface -> lambda(@FunctionalInterface) 확장.
// interface -> @annotation으로 확장

@Retention(RetentionPolicy.SOURCE) // 소스코드상에만 있고 compile될때에는 읽지 않도록 설정하는것.
@Target(ElementType.TYPE) // Target : Type이라는 annotation을 클래스에 쓸수있다는것을 설정.
public @interface Type { // annotation의 이름을 Type으로 만들어준거다. @Type 
	String name();
	int value(); // field를 추상메서드 형태로 쓴다.
}

@Retention(RetentionPolicy.CLASS)
@Target(ElementType.FIELD)
@interface Field {
	int value();
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.CONSTRUCTOR)
@interface Constructor {
	int value() default 0;
}

// @Retention 지정하지않으면 RUNTIME이 기본값
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

