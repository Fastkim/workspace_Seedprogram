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
			//autobot.guard(); // Autobot 타입에는 guard method가 없다.
			
			if(autobot instanceof Bumblebee bot) bot.guard(); // autobot instanceof Bumblebee가 true이면 bot을 Bumblebee 타입으로 바꿔라.
			if(autobot instanceof Prime bot) bot.command();
		}
	}
}
