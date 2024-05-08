package com.my.hr.dao;

import com.my.hr.domain.Laborer;

public interface LaborerDao {
	public Laborer[] selectLaborers();
	public void insertLaborer(Laborer laborer);
	public void updateLaborer(int laborerId, String laborerName, String startDate);
	public void deleteLaborer(int laborerId);
}
