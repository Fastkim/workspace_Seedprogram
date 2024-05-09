package com.my.hr.dao;

import java.util.List;
import java.util.stream.Collectors;

import com.my.hr.domain.Laborer;

public class LaborerDaoImpl implements LaborerDao {
	private List<Laborer> laborers;
	private int row;
	public static int lastIndex = 0;
	
	public LaborerDaoImpl(List<Laborer> laborer) {
		this.laborers = laborer;
	}
	
	
	@Override
	public void insertLaborer(Laborer laborer) {
		this.laborers.add(laborer);
		laborer.setLaborerId(++lastIndex);
	}
	
	@Override
	public List<Laborer> selectLaborers() {
		return this.laborers;
	}
	
	@Override
	public void updateLaborer(int laborerId, String laborerName, String startDate) {
		laborers.stream().filter(laborer -> laborer.getLaborerId() == laborerId)
		.collect(Collectors.toList())
		.forEach(laborer -> {
			laborer.setLaborerName(laborerName);
			laborer.setStartDate(startDate);
		});
		
//		this.laborers.get(laborerId).setLaborerName(laborerName);
//		this.laborers.get(laborerId).setStartDate(startDate);
	}
	
	@Override
	public void deleteLaborer(int laborerId) {
		laborers.stream().filter(laborer -> laborer.getLaborerId() == laborerId)
		.collect(Collectors.toList()).forEach(laborer -> 
		{
			laborers.remove(laborer);
		});
		
		
	}
}
