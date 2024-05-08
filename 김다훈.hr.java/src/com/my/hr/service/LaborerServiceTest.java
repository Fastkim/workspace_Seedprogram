package com.my.hr.service;

import com.my.hr.domain.Laborer;

public class LaborerServiceTest {
	public static void main(String[] args) {
		LaborerServiceImpl laborerService = new LaborerServiceImpl();
		
		Laborer[] laborers = new Laborer[5];
		for(int i = 0; i < laborers.length; i++)
			laborers[i] = new Laborer("김다훈","2022-05-05");
		
		for(Laborer laborer: laborers) System.out.println(laborer);
	}
}
