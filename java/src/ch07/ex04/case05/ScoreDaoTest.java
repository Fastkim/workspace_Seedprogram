package ch07.ex04.case05;

public class ScoreDaoTest {
	public static void main(String[] args) {
		// fixture : test를 위해서 미리 준비하는 데이터를 말한다.
		Score score1 = new Score(100, 100, 100);
		Score score2 = new Score(10, 10, 10);
		
		Score[] scores = new Score[2]; // 2개를 저장할수있는 배열준비
		ScoreDao scoreDao = new ScoreDaoImpl(scores);
		
		scoreDao.insertScore(score1);
		scoreDao.insertScore(score2);
		
		scores = scoreDao.selectScores();
		for(Score score: scores) System.out.println(score);
	}
}
