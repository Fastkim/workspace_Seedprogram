package com.my.hr.domain;

public class NoneException extends RuntimeException{ // try블록을 사용안해도 되므로 runtimeException이 더 편하다.
	public NoneException(String msg) {
		super(msg);
	}

}
