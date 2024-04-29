package ch07.home.ex05.case10;

import java.util.ArrayList;
import java.util.List;


public class Main {
	public static void main(String[] args) {
		List<Stationery> bag = new ArrayList<>();
		Pencil pencil = new Pencil();
		Eraser eraser = new Eraser();
		
		bag.add(pencil);
		bag.add(eraser);
		
		for(Stationery stationery: bag) {
			if(stationery instanceof Pencil item) item.write(); 
			if(stationery instanceof Eraser item) item.erase();
		}
	}
}
/*
가방에 연필과 지우개를 담는다.
가방에서 물건을 꺼낸다.
꺼낸 물건이 연필이면 write, 지우개면 지운다.
*/
