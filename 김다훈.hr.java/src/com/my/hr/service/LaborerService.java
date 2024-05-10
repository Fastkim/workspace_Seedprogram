package com.my.hr.service;

import java.util.List;
import com.my.hr.domain.Laborer;

public interface LaborerService {
	public List<Laborer> getLaborerList();
	public void addLaborer(Laborer laborer);
	public void fixLaborer(int laborerId, String laborerName, String startDate);
	public void delLaborer(int laborerId);
}
