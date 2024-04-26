package ch07.ex04.case05;

public interface ScoreDao {
	void insertScore(Score score);
	Score[] selectScores();
}
