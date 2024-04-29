package ch07.ex05.case10;

import java.util.ArrayList;
import java.util.List;

public class Main {
	public static void main(String[] args) {
		Bumblebee bumblebee = new Bumblebee();
		Prime prime = new Prime();
		List<AutoBot> corps = new ArrayList<>();
		
		corps.add(bumblebee);
		corps.add(prime);
		
		for(AutoBot autobot: corps) {
			autobot.run();
			autobot.fight();
			//autobot.guard(); // autobot 타입에는 guard method가 없다.
			
			if(autobot instanceof Bumblebee bot) bot.guard(); // autobot instanceof Bumblebee 가 true 이면 bot을 Bumblebee 타입으로 바꿔라.
			if(autobot instanceof Prime bot) bot.command();
		}
	}
}
