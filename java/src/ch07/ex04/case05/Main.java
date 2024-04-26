package ch07.ex04.case05;

public class Main { // main에서는 app을 만든다 = > 객체들을 생성하고 객체들을 조립한다.
	public static void main(String[] args) { // Dao는 데이터가 모여있는 창고라고 생각
		ScoreDao scoreDao = new ScoreDaoImpl(new Score[5]); // 구현 객체를 부모타입으로 casting 하고 있다.
		ScoreService scoreService = new ScoreServiceImpl(scoreDao);
		ScoreIo scoreIo = new ScoreIo(scoreService);
		
		scoreIo.play();
	}
}
