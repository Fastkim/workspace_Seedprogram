module module_a {
	exports pack1; // library와 module의 차이 : library는 모두 공개이지만, module은 export를 통해 공개여부를 설정할수있다.
	//exports pack2;
	requires module_b; // requires : 모듈을 가져와라
	// requires transitive : 흘러가다. A에 B객체가 있으므로 A를 사용하면서 B도 사용할수있게 해준다.
}
