package ch07.ex01.case06;

public class Main {
	public static void main(String[] args) {
		Human human = new Student();
		human.sleep();
//		human.study(); // 자식객체에 있는 메서드이당. 부모타입의 human은 안돼!
		
		Student student = (Student)human;
		student.study();
		student.sleep(); // 자식은 다 사용할수 있써! 자식타입의 studnet는 가능이지~
		
	}
}
