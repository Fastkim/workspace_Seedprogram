package ch08.ex02.case04;

public class Main {
	public static void main(String[] args) {
		int choice = 1;
		String jobName = "";
		
		switch(Job.valueOf(choice)) { // valueof(String) , int없음
		case LIST -> jobName = "목록"; // hr.java에서는 각각 메서드를 넣어주면된당.
		case ADD -> jobName = "추가";
		case FIX -> jobName = "수정";
		case DEL -> jobName = "삭제";
		default -> jobName = "종료";
		}
		
		System.out.println(jobName);
	}
}
