package com.pinkcommunity.code.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pinkcommunity.code.payloads.QuestionDto;
import com.pinkcommunity.code.payloads.SolutionDto;
import com.pinkcommunity.code.services.QuestionService;

@RestController
@RequestMapping("/pinkcommunity/api/")
public class QuestionController {
	
	@Autowired
	private QuestionService questionService;
	
	//create question
	@PostMapping("/category/{categoryId}/question/")
	ResponseEntity<QuestionDto> createQuestion(@RequestBody QuestionDto questionDto,@PathVariable  Integer categoryId){
		
		QuestionDto createdQuestion = this.questionService.createQuestion(questionDto,categoryId);
		
		return new ResponseEntity<QuestionDto>(createdQuestion,HttpStatus.CREATED);
	
	}
	
	//update question
	@PutMapping("/question/{questionId}")
	ResponseEntity<QuestionDto> updateQuestion(@RequestBody QuestionDto questionDto,@PathVariable Integer questionId){
		QuestionDto updatedQuestion = this.questionService.updateQuestion(questionDto, questionId);
		
		return new ResponseEntity<QuestionDto>(updatedQuestion,HttpStatus.ACCEPTED);
	}
	
//	get all question
	@GetMapping("/question/")
	ResponseEntity<List<QuestionDto>> getAllQuestion(){
		
		List<QuestionDto> questionDtos = this.questionService.getAllQuestion();
		return ResponseEntity.ok(questionDtos);
	}
	
	
	//get question by id 
	@GetMapping("/question/{questionId}")
	ResponseEntity<QuestionDto> getQuestionById(@PathVariable Integer questionId){
		
		QuestionDto questionDto = this.questionService.getQuestionById(questionId);
		return new ResponseEntity<QuestionDto>(questionDto,HttpStatus.OK);
		
	}
	
	//get question by category
	@GetMapping("/question/category/{categoryId}")
	ResponseEntity<List<QuestionDto>> getAllQuestionByCategory(@PathVariable Integer categoryId){
		
		List<QuestionDto> questionDtos = this.questionService.getAllQuestionByCategory(categoryId);
		return new ResponseEntity<List<QuestionDto>>(questionDtos,HttpStatus.OK);
		
	}
	
//	get all solution by questionId
	@GetMapping("/question/{questionId}/solutions")
	ResponseEntity<List<SolutionDto>> getAllsolutionByQuestionId(@PathVariable Integer questionId){
		
		List<SolutionDto> list = this.questionService.getAllSolutionByQuestionId(questionId);
		return ResponseEntity.ok(list);
		
		
	}
	
	

}
