package com.my.hr.domain;

public class Laborer {
	private int laborerId;
	private String laborerName;
	private String startDate;
	
	public Laborer(String laborerName, String startDate) {
		this.laborerName = laborerName;
		this.startDate = startDate;
	}
	
	public void setLaborerId(int laborerId) {
		this.laborerId = laborerId;
	}
	
	public int getLaborerId() {
		return this.laborerId;
	}
	
	public String getLaborerName() {
		return this.laborerName;
	}
	
	public void setLaborerName(String laborerName) {
		this.laborerName = laborerName;
	}
	
	public String getStartDate() {
		return this.startDate;
	}
	
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	
	@Override
	public String toString() {
		return String.format("%5d %8s %9s", 
				 laborerId, laborerName, startDate);
	}
}
