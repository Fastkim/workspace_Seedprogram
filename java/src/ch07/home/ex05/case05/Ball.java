package ch07.home.ex05.case05;

import java.util.ArrayList;

public class Ball {
	private int ballNum;
	
	public Ball(int ballNum) {
		this.ballNum = ballNum;
	}
	
	@Override
	public String toString() {
		return this.ballNum + " ";
	}
}
