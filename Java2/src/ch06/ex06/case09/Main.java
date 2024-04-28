package ch06.ex06.case09;

public class Main {
	public static void main(String[] args) {
		Console console = new Console();
		Browser browser = new Browser();
		Chrome chrome = new Chrome();
		
		console.out();
		browser.out();
		
		UI.in(); // 인터페이스가 가지고있는 static method는 상속이 불가능하다. 자식이 호출 불가능.
//		console.in();
//		browser.in();
//		Console.in();
//		Browser.in();
		
//		chrome.out();
//		chrome.in();
//		Chorme.in();
		chrome.play(); // 클래스가 가지고있는 static method는 상속이 가능하다. 자식이 호출 가능.
		Chrome.play();
	}
}
