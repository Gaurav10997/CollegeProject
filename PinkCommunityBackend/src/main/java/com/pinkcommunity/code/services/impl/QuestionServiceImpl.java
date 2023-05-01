package com.pinkcommunity.code.services.impl;

import java.util.List;
import java.util.stream.Collectors;


import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pinkcommunity.code.entities.Category;
import com.pinkcommunity.code.entities.Question;
import com.pinkcommunity.code.entities.Solution;
import com.pinkcommunity.code.exceptions.ResourceNotFoundException;
import com.pinkcommunity.code.payloads.QuestionDto;
import com.pinkcommunity.code.payloads.SolutionDto;
import com.pinkcommunity.code.repositories.CategoryRepo;
import com.pinkcommunity.code.repositories.QuestionRepo;
import com.pinkcommunity.code.services.QuestionService;

@Service
public class QuestionServiceImpl implements QuestionService{
	
	@Autowired
	private QuestionRepo questionRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private CategoryRepo categoryRepo;

	@Override
	public QuestionDto createQuestion(QuestionDto qusetionDto,Integer categoryId) {
		Question question = this.modelMapper.map(qusetionDto, Question.class);
		Category category=this.categoryRepo.findById(categoryId).orElseThrow(()->
				new ResourceNotFoundException( "Category ", "id", Integer.toString(categoryId)));
		question.setCategory(category);
		Question savedQuestion = this.questionRepo.save(question);
		
		return this.modelMapper.map(savedQuestion, QuestionDto.class);
	}

	@Override
	public QuestionDto updateQuestion(QuestionDto questionDto, Integer questionId) {
		
		Question question = this.questionRepo.findById(questionId).orElseThrow(()->
			new ResourceNotFoundException("Question", "id", Integer.toString(questionId)));
		if(questionDto.getQuestionDescription()!=null)
			question.setQuestionDescription(questionDto.getQuestionDescription());
		
		if(questionDto.getQuestionTitle()!=null)
			question.setQuestionTitle(questionDto.getQuestionTitle());
		
		if(questionDto.getQuestionExample()!=null)
			question.setQuestionExample(questionDto.getQuestionExample());
		
		if(questionDto.getQuestionScore()!=null)
			question.setQuestionScore(questionDto.getQuestionScore());
		
		if(questionDto.getQuestionLevel()!=null)
			question.setQuestionLevel(questionDto.getQuestionLevel());
		
		Question savedQuestion = this.questionRepo.save(question);
		
		return this.modelMapper.map(savedQuestion, QuestionDto.class);
	}

	@Override
	public List<QuestionDto> getAllQuestion() {
		List<Question> questions = this.questionRepo.findAll();
		List<QuestionDto> questionDtos = questions.stream().map((question)->this.modelMapper.map(question, QuestionDto.class)).collect(Collectors.toList());
		return questionDtos;
	}

	@Override
	public List<QuestionDto> getAllQuestionByCategory(Integer categoryId) {
		Category category=this.categoryRepo.findById(categoryId).
				orElseThrow(()->new ResourceNotFoundException("Category", "Id", Integer.toString(categoryId)));
		
		List<Question> questions = this.questionRepo.findByCategory(category);
		List<QuestionDto> questionDtos = questions.stream().map((question)->
			this.modelMapper.map(question, QuestionDto.class)).collect(Collectors.toList());
		
		return questionDtos;
	}

	@Override
	public QuestionDto getQuestionById(Integer questionId) {
		
		Question question = this.questionRepo.findById(questionId).orElseThrow(()->
				new ResourceNotFoundException("question"," id ",Integer.toString(questionId)));
		return this.modelMapper.map(question, QuestionDto.class);
		
	}

	@Override
	public void deleteQuestion(Integer questionId) {
		// it might not necessary in our project
		
	}

	
	//to be check
	@Override
	public List<SolutionDto> getAllSolutionByQuestionId(Integer questionId) {
		
		Question question = this.questionRepo.findById(questionId).orElseThrow(()-> 
			new ResourceNotFoundException("question", "id", Integer.toString(questionId)));
		List<Solution> solution = question.getSolution();
		List<SolutionDto> solutionDtos= solution.stream().map(sol-> this.modelMapper.map(sol,SolutionDto.class)).collect(Collectors.toList());
		
		return solutionDtos;
	}

}
