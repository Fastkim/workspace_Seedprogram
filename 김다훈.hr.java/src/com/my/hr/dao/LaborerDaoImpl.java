package com.my.hr.dao;

import com.my.hr.domain.Laborer;

public class LaborerDaoImpl implements LaborerDao {
	private Laborer[] laborers;
	private int row;
	
	public LaborerDaoImpl(Laborer[] laborers) {
		this.laborers = laborers;
	}
	
	
	@Override
	public void insertLaborer(Laborer laborer) {
		this.laborers[row++] = laborer;
		laborer.setLaborerId(Laborer.lastIndex++);
	}
	
	@Override
	public Laborer[] selectLaborers() {
		return this.laborers;
	}
	
	@Override
	public void updateLaborer(int laborerId, String laborerName, String startDate) {
		this.laborers[laborerId].setLaborerName(laborerName);
		this.laborers[laborerId].setStartDate(startDate);
	}
	
	@Override
	public void deleteLaborer(int laborerId) {
		this.laborers[laborerId] = null;
	}
}
