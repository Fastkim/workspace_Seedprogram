package com.my.hr.io;

public enum Job {
	EXIT("종료"), LIST("목록"), ADD("추가"), FIX("수정"), DEL("삭제");
	
	private String label;
	
	private Job(String label) {
		this.label = label;
	}
	
	public static int length() {
		return values().length;
	}
	
	public static Job valueOf(int ordinal) {
		return values()[ordinal];
	}
	
	public static String labels() { // 메뉴목록을 hardCoding이 아니라 softCoding으로 만들려는 메서드
		Job[] jobs = values();
		String labels = "";
		String last = "";
		
		for(Job job: jobs) {
			if(job.ordinal() == 0) last = job.ordinal() + "." + job.label; // 0.종료
			else labels += job.ordinal() + "." + job.label + ", "; // 1.목록, 2.추가, 3.수정, 4.삭제
		}
		labels += last; // 0.종료를 메뉴 맨끝으로 보내기
		
		return labels; 
	}
}
