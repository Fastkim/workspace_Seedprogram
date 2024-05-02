module app_2 {
	//requires module_a; //빨간줄 : compiler가 찾지못하므로 자식모듈의 buildPath를 설정해줘야한다.
	//requires module_b;
	requires transitive module;
}