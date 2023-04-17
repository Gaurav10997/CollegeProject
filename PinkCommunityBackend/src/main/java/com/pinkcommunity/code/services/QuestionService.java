package com.pinkcommunity.code.services;

import java.util.List;


import com.pinkcommunity.code.payloads.QuestionDto;
import com.pinkcommunity.code.payloads.SolutionDto;


public interface QuestionService {

	//create question
	QuestionDto createQuestion(QuestionDto qusetionDto,Integer categoryId);
	
	//update question
	QuestionDto updateQuestion(QuestionDto qusetionDto,Integer questionId);
	
	
	//get all question 
	List<QuestionDto> getAllQuestion();
	
	//get all question of a category
	List<QuestionDto> getAllQuestionByCategory(Integer categoryId);
	
	//get question by id
	QuestionDto getQuestionById(Integer questionId);
	
	//delete a question
	void deleteQuestion(Integer questionId);
	
	//get all solution of a question
	List<SolutionDto> getAllSolutionByQuestionId(Integer questionId);
	
}
