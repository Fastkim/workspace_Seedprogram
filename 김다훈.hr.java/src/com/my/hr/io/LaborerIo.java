package com.my.hr.io;

import java.util.List;

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
			Console.info("주메뉴 : 1.목록  2.추가  3.수정  4.삭제  0.종료\n");
			chooseNum = Console.inNum("메뉴번호를 선택하세요 : ");
			
//			laborerId = Console.indexNum("노동자ID: ");
//			laborerName = Console.inStr("노동자명: ");
//			startDate = Console.inDate("입사일: ");
			
			switch(chooseNum) {
				case 1 -> {
					List<Laborer> laborers = laborerService.getLaborerList();
					if(laborers.size() == 0) Console.info("노동자가 없습니다.\n");
					else {
						Console.info("|노동자ID|노동자명|입사일|");
						for(Laborer laborer: laborers) Console.info(laborer);
					}				
				}
				case 2 -> {
					laborerName = Console.inStr("노동자명: ");
					if(laborerName.equals("0")) {
						Console.info("앱을 종료합니다.");
						run = false;
						break;
					}
					startDate = Console.inDate("입사일: ");
					laborerService.addLaborer(new Laborer(laborerName, startDate));
				}
				case 3 -> {
					laborerId = Console.indexNum("변경할 노동자ID: ");
					if(laborerId == 0) {
						Console.info("앱을 종료합니다.");
						run = false;
						break;
					}
					laborerName = Console.inStr("변경할 노동자명: ");
					startDate = Console.inDate("변경할 입사일: ");
					laborerService.fixLaborer(laborerId, laborerName, startDate);
					Console.info(laborerId + "번" + "노동자데이터를 수정하였습니다.");
				}
				case 4 -> {
					laborerId = Console.indexNum("삭제할 노동자ID: ");
					if(laborerId == 0) {
						Console.info("앱을 종료합니다.");
						run = false;
						break;
					}
					laborerService.delLaborer(laborerId);
					Console.info(laborerId + "번" + "노동자데이터를 삭제하였습니다.");
				}
				default -> {
					Console.info("앱을 종료합니다.");
					run = false;
				}
			}
		}
	}
}
