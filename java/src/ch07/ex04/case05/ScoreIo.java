package ch07.ex04.case05;

public class ScoreIo { // html로 표현할 부분
	private ScoreService scoreService;
	
	public ScoreIo(ScoreService scoreService) {
		this.scoreService = scoreService;
	}
	
	/*
	public void play() {
		Score[] scores = new Score[5];
		
		for(int i = 0; i < scores.length; i++)
			scoreService.addScore(
					new Score((i + 1) * 10, (i + 1) * 10, (i + 1) * 10));
		
		scores = scoreService.getScores();
		for(Score score: scores)
			System.out.println(score);
	}
	*/
	
	// presentation logic은 test 파일을 만들지 않아도 된다.
	// 과제: Console interface를 제작하라.
	public void play() {
		int kor = 0;
		int eng = 0;
		int math = 0;
		
		for(int i = 0; i < 5; i++) {
			Console.info((i+1) + "번째 학생의 점수를 입력하세요.");
			kor = Console.inNum("국어: ");
			eng = Console.inNum("영어: ");
			math = Console.inNum("수학: ");
			
			scoreService.addScore(new Score(kor, eng, math));
		}
		
		Score[] scores = scoreService.getScores();
		for(Score score: scores)
			Console.info(score);
	}
}
