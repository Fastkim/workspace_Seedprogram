package ch07.home.ex05.case10;

import java.util.ArrayList;
import java.util.List;


public class Main {
	public static void main(String[] args) {
		Bag<Stationery> bag = new Bag<>();
		Pencil pencil = new Pencil();
		Eraser eraser = new Eraser();
		
		bag.add(pencil); // add(Stationery 타입)
		bag.add(eraser);
		
		for(Stationery s: bag) { // 명령문이 2개이상으므로 블록기호를 사용하자.
			if(s instanceof Pencil pen) pen.write(); 
			if(s instanceof Eraser rubber) rubber.erase();
		}
	}
}
/*
가방에 연필과 지우개를 담는다. // is a 관계(x) / has a 관계(o) => 연필과 지우개가 파라미터로 들어온다.
가방에서 물건을 꺼낸다.
꺼낸 물건이 연필이면 write, 지우개면 지운다.
*/
