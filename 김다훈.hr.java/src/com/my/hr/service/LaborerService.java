package com.my.hr.service;

import com.my.hr.domain.Laborer;

public interface LaborerService {
	public Laborer[] getLaborerList();
	public void addLaborer(Laborer laborer);
	public void fixLaborer(int laborerId, String laborerName, String startDate);
	public void delLaborer(int laborerId);
}
