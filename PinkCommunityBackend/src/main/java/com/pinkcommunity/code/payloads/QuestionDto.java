package com.pinkcommunity.code.payloads;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class QuestionDto {
	
private Integer questionId;
	

	private Integer questionScore;
	

	private String questionTitle;
	

	private String questionLevel;
	
	
	private String questionDescription;
	
	
	private String questionExample;
	
	@JsonIgnore
	private CategoryDto category;

}
