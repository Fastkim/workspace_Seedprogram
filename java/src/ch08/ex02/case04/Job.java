package ch08.ex02.case04;

import java.util.Arrays;
import java.util.Optional;
import java.util.stream.Stream;

public enum Job {
	EXIT, LIST, ADD, FIX, DEL; // ordinary값(index)은 자동할당된다.
	
	public static Job valueOf(int ordinal) {
		return values()[ordinal];
	}
	
	public static Job valueOf2(int ordinal) {
		/*
		Stream<Job> stream = Arrays.stream(values());
		stream = stream.filter(job -> job.ordinal() == ordinal);
		Optional<Job> job = stream.findFirst(); // Optional은 container(그릇), findFirst() : 값이 있는지 찾는것.
		return job.orElse(null); // job 객체안에 값이 있으면 값을 return 하고 없으면 null을 리턴
		*/
		//chaining
		return Arrays.stream(values())
				.filter(job -> job.ordinal() == ordinal)
				.findFirst()
				.orElseThrow(); // orElseThrow(): 값이 없을경우 exception을 return 한다.
	}
}
