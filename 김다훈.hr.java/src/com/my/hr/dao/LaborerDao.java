package com.my.hr.dao;

import java.util.List;

import com.my.hr.domain.Laborer;

public interface LaborerDao {
	public List<Laborer> selectLaborers();
	public void insertLaborer(Laborer laborer);
	public void updateLaborer(int laborerId, String laborerName, String startDate);
	public void deleteLaborer(int laborerId);
}
