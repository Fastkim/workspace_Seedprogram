package ch05.ex03.case03;

public class Main {
	public static void main(String[] args) {
		House house1 = new House();
		House house2 = null; // local variable은 선언과 동시에 초기화하자.
		
		house1.setAddress("서울 강남구 역삼동");
		house2 = house1; // house1의 주소가 house2에 할당되었다.
		
		System.out.println(house2.getAddress()); // 
	}
}
