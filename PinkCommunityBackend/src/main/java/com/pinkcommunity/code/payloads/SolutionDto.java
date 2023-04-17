package com.pinkcommunity.code.payloads;

import com.pinkcommunity.code.entities.SolutionId;
import com.pinkcommunity.code.entities.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class SolutionDto {
	
	private SolutionId solutionId=new SolutionId();
	
	
	private String answer;
	
	private Boolean attempt;
	
	private Boolean solved;

	@Override
	public String toString() {
		return "SolutionDto [answer=" + answer + ", attempt=" + attempt + ", solved=" + solved + "]";
	}
	

}
