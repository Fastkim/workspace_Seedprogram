package ch07.ex04.case05;

public class ScoreDaoImpl implements ScoreDao {
	private Score[] scores; // domain에 접근
	private int cursor; // index 개념
	
	public ScoreDaoImpl(Score[] scores) {
		this.scores = scores;
	}
	
	@Override
	public void insertScore(Score score) {
		this.scores[cursor++] = score;
	}
	
	@Override
	public Score[] selectScores() {
		return this.scores;
	}
	
}
