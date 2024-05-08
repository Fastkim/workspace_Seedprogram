package com.my.hr.dao;

import com.my.hr.domain.Laborer;

public class LaborerDaoTest {
	public static void main(String[] args) {
		Laborer laborer1 = new Laborer("김다훈","2024-02-02");
		Laborer laborer2 = new Laborer("김지혜","2024-03-03");
		
		Laborer[] laborers = new Laborer[2];
		LaborerDao laborerDao = new LaborerDaoImpl(laborers);
		
		laborerDao.insertLaborer(laborer1);
		laborerDao.insertLaborer(laborer2);
		
		laborers = laborerDao.selectLaborers();
		for(Laborer laborer: laborers) System.out.println(laborer);
	}
}
