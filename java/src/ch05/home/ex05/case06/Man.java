package ch05.home.ex05.case06;

public class Man {
	private String manName;
	private Phone phone; // dependency
	
	
	public void sendMsg() {
		phone.sendMsg();
	}
	
	public void calling() {
		phone.calling();
	}
	
	public void playGame() {
		phone.playGame();
	}
	
	public String getManName() {
		return manName;
	}

	public void setManName(String manName) {
		this.manName = manName;
	}

	public Phone getPhone() {
		return phone;
	}

	public void setPhone(Phone phone) {
		this.phone = phone;
	}
	
	
}
