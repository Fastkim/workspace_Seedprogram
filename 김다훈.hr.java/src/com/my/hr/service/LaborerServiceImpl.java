package com.my.hr.service;

import java.util.List;

import com.my.hr.dao.LaborerDao;
import com.my.hr.domain.Laborer;

public class LaborerServiceImpl implements LaborerService {
	private LaborerDao laborerDao;
	
	public LaborerServiceImpl() {}
	
	public LaborerServiceImpl(LaborerDao laborerDao) {
		this.laborerDao = laborerDao;
		
	}
	
	@Override
	public List<Laborer> getLaborerList() {
		List<Laborer> laborers = laborerDao.selectLaborers();
		return laborers;
	}
	
	@Override
	public void addLaborer(Laborer laborer) {
		laborerDao.insertLaborer(laborer);
	}
	
	@Override
	public void fixLaborer(int laborerId, String laborerName, String startDate) {
		laborerDao.updateLaborer(laborerId, laborerName, startDate);
	}
	
	@Override
	public void delLaborer(int laborerId) {
		laborerDao.deleteLaborer(laborerId);
	}
}
