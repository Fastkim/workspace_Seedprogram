package ch05.home.ex05.case06;

public class Main {
	public static void main(String[] args) {
		Man man = new Man();
		Phone phone = new Phone();
		man.setManName("최한석");
		phone.setBrand("SAMSUNG");
		phone.setPrice(1_000_000);
		man.setPhone(phone); // A has a B 관계
		man.sendMsg();
		man.calling();
		man.playGame();
	}
}
