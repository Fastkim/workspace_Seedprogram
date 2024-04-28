package ch07.ex04.case05;

public class ScoreServiceImpl implements ScoreService {
	private ScoreDao scoreDao;
	
	public ScoreServiceImpl() {}
	
	public ScoreServiceImpl(ScoreDao scoreDao) {
		this.scoreDao = scoreDao;
	}
	
	@Override
	public void addScore(Score score) {
		scoreDao.insertScore(score);
	}
	
	@Override
	public Score[] getScores() {
		Score[] scores = scoreDao.selectScores();
		this.calcScore(scores);
		return scores;
	}
	
	/* 합계 평균을 구하는 메서드를 만들어라 */
	public void calcScore(Score[] scores) {
		int sum = 0;
		double avg = 0.0;
		
		for(int i = 0; i < scores.length; i++) {
			sum = 0;
			sum += scores[i].getKor() + scores[i].getEng() + scores[i].getMath();
			scores[i].setSum(sum);
			
			avg = sum / 3.0;
			scores[i].setAvg(avg);
		}
	}
}
