package ch07.ex04.case05;

public class Score { // 이 친구가 domain으로 이제 DB를 클래스로 만들어놓은것이다. 이친구는 이제 Dao랑 대화할거야.
	private int kor;
	private int eng;
	private int math;
	private int sum;
	private double avg;
	
	public Score(int kor, int eng, int math) {
		this.kor = kor;
		this.eng = eng;
		this.math = math;
	}

	public int getKor() {
		return kor;
	}

	public void setKor(int kor) {
		this.kor = kor;
	}

	public int getEng() {
		return eng;
	}

	public void setEng(int eng) {
		this.eng = eng;
	}

	public int getMath() {
		return math;
	}

	public void setMath(int math) {
		this.math = math;
	}

	public int getSum() {
		return sum;
	}

	public void setSum(int sum) {
		this.sum = sum;
	}

	public double getAvg() {
		return avg;
	}

	public void setAvg(double avg) {
		this.avg = avg;
	}
	
	@Override
	public String toString() {
		return String.format("%5d %5d %5d %4d %4.2f",
				kor, eng, math, sum, avg);
	}
	
}
