package com.my.hr.io;

import com.my.hr.domain.Laborer;
import com.my.hr.service.LaborerService;

public class LaborerIo {
	private LaborerService laborerService;
	
	public LaborerIo(LaborerService laborerService) {
		this.laborerService = laborerService;
	}
	
	public void play() {
		Boolean run = true;
		int chooseNum = 0;
		int laborerId = 0;
		String laborerName = "";
		String startDate = "";
		
		
		
		while(run) {
			Console.info("주메뉴 : 1.목록  2.추가  3.수정  4.삭제  0.종료");
			chooseNum = Console.inNum("메뉴번호를 선택하세요 : ");
			
//			laborerId = Console.indexNum("노동자ID: ");
//			laborerName = Console.inStr("노동자명: ");
//			startDate = Console.inDate("입사일: ");
			
			switch(chooseNum) {
				case 1 -> {
					Laborer[] laborers = laborerService.getLaborerList();
					Console.info("|노동자ID|노동자명|입사일|");
					for(Laborer laborer: laborers)
						Console.info(laborer);
					}
				case 2 -> {
					laborerName = Console.inStr("노동자명: ");
					startDate = Console.inDate("입사일: ");
					laborerService.addLaborer(new Laborer(laborerName, startDate));
					}
				case 3 -> laborerService.fixLaborer(Console.indexNum("노동자ID: "), Console.inStr("노동자명: "), Console.inDate("입사일: "));
				case 4 -> laborerService.delLaborer(Console.indexNum("노동자ID: "));
				default -> run = false;
			}
		}
	}
}
