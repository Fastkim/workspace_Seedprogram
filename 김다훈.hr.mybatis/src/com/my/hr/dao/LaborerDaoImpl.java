package com.my.hr.dao;

import java.time.LocalDate;
import java.util.List;

import com.my.hr.dao.map.LaborerMap;
import com.my.hr.domain.Laborer;
import com.my.hr.domain.NoneException;

import config.Configuration;

public class LaborerDaoImpl implements LaborerDao {
	private LaborerMap laborerMap;
	
	public LaborerDaoImpl() {
		this.laborerMap = Configuration.getMapper(LaborerMap.class);
	}
	
	@Override
	public List<Laborer> selectLaborers(){
		return laborerMap.selectLaborers();
	}
	
	@Override
	public Laborer selectLaborer(int laborerId) {
		return laborerMap.selectLaborer(laborerId);
	}
	
	@Override
	public void insertLaborer(String laborerName, LocalDate hireDate) {
		laborerMap.insertLaborer(laborerName, hireDate);
	}
	
	@Override
	public void updateLaborer(Laborer laborer) {
		laborerMap.updateLaborer(laborer);
	}
	
	@Override
	public void deleteLaborer(int laborerId) {
		Laborer laborer = selectLaborer(laborerId);
		if(laborer != null) laborerMap.deleteLaborer(laborerId);
		else throw new NoneException("해당 노동자가 없습니다.");
	}
}