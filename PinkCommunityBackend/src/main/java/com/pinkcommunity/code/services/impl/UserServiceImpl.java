package com.pinkcommunity.code.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import com.pinkcommunity.code.entities.Question;
import com.pinkcommunity.code.entities.Solution;
import com.pinkcommunity.code.entities.SolutionId;
import com.pinkcommunity.code.entities.User;
import com.pinkcommunity.code.exceptions.ResourceNotFoundException;
import com.pinkcommunity.code.payloads.SolutionDto;
import com.pinkcommunity.code.payloads.UserDto;
import com.pinkcommunity.code.repositories.QuestionRepo;
import com.pinkcommunity.code.repositories.SolutionRepo;
import com.pinkcommunity.code.repositories.UserRepo;
import com.pinkcommunity.code.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private QuestionRepo questionRepo;
	
	@Autowired
	private SolutionRepo solutionRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public UserDto createUser(UserDto userDto) {

		User user = this.modelMapper.map(userDto, User.class);
		User savedUser = this.userRepo.save(user);
		return this.modelMapper.map(savedUser, UserDto.class);
	}

	@Override
	public UserDto updateUser(UserDto userDto, Integer userId) {
		
		User user=this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User", "User ID", Integer.toString(userId) ));
		user.setName(userDto.getName());
		user.setEmail(userDto.getEmail());
		user.setAbout(userDto.getAbout());
		user.setPassword(userDto.getPassword());
		//user.setScore(userDto.getScore()); //may required change
		user.setContestScore(userDto.getContestScore());
		
		User savedUser=this.userRepo.save(user);
		
		return this.modelMapper.map(savedUser, UserDto.class);
		
	}

	@Override
	public void deleteUser(Integer userId) {//not completed
		User user=this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User", "User ID", Integer.toString(userId) ));
		
		this.userRepo.delete(user);
		
	}

	@Override
	public UserDto getUserById(Integer userId) {
		User user=this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User", "User ID", Integer.toString(userId) ));
		
		return this.modelMapper.map(user, UserDto.class);
	}

	@Override
	public List<UserDto> getAllUser() {
		List<User> users= this.userRepo.findAll();
		
		
		List<UserDto> userDtos =  users.stream().map((user)->this.modelMapper.map(user, UserDto.class)).collect(Collectors.toList());
		
		return userDtos;
	}

	@Override
	public SolutionDto uploadSolution(SolutionDto solutionDto, Integer userId, Integer questionId) {
		
		User user=this.userRepo.findById(userId).orElseThrow(()->new  ResourceNotFoundException("user","id",Integer.toString(userId)));  //put error handling code
		Question question=this.questionRepo.findById(questionId).orElseThrow(()->new  ResourceNotFoundException("question","id",Integer.toString(questionId)));
		
		Solution newSolution=null;
		boolean flag=false;
		
		try {
			newSolution=this.solutionRepo.findById(new SolutionId(userId,questionId)).orElseThrow(()->
				new ResourceNotFoundException("user or question", "Ids", Integer.toString(userId)+"  "+Integer.toString(questionId)));
			
			flag=newSolution.getSolved();
			System.out.println("answer " + newSolution.getAnswer()+", solved " +newSolution.getSolved() +", attempt "+ newSolution.getAttempt());
			newSolution.setAnswer(solutionDto.getAnswer());
			newSolution.setSolved(solutionDto.getSolved());
		}
		catch(ResourceNotFoundException ex) {
			newSolution= new Solution();
			newSolution.setSolutionId(new SolutionId(user.getUserId(),question.getQuestionId()));
			newSolution = this.modelMapper.map(solutionDto, Solution.class);
			
			newSolution.setQuestion(question);
			newSolution.setUser(user);
			System.out.println(ex.getMessage());
			
		}
		user.getSolution().add(newSolution);
		boolean flag2 = solutionDto.getSolved();
		if(flag==false && flag2==true) {
			user.setScore(user.getScore()+question.getQuestionScore());
			
		}
		
		
		//check who is owner -> user is owner so input takes from user repository
		User savedUser = this.userRepo.save(user);
				
//		List<Solution> list=savedUser.getSolution();
//		List<SolutionDto> collect = list.stream().map((sol)->this.modelMapper.map(sol, SolutionDto.class)).collect(Collectors.toList());
		
//		Solution savedSolution = savedUser.getSolution().get(savedUser.getSolution().size()-1);
//		System.out.println("   \n\n value of solved after update "+ savedSolution.getSolved());
		
		Solution savedSolution=this.solutionRepo.findById(new SolutionId(userId,questionId)).get();
		
		return this.modelMapper.map(savedSolution, SolutionDto.class);

	}

	// to be check
	@Override
	public List<SolutionDto> getSolutionByUserId(Integer userId) {
		
		User user=this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("user", "id", Integer.toString(userId)));
		
		List<Solution> list=user.getSolution();
		List<SolutionDto> solutionDtos = list.stream().map(sol-> this.modelMapper.map(sol, SolutionDto.class)).collect(Collectors.toList());
		return solutionDtos;
	}

	
	//to be check
	@Override
	public SolutionDto getSolutionByUserIdAndQuestionId(Integer userId, Integer questionId) {
		User user=this.userRepo.findById(userId).orElseThrow(()-> 
			new ResourceNotFoundException("user", "user id", Integer.toString(userId)));
		
		List<Solution> list=user.getSolution();
		
		Solution solution =getSolutionByQuestionId(list,questionId);
		
			if(solution==null) 
				throw new ResourceNotFoundException("question", "question id", Integer.toString(questionId));
			else
				return this.modelMapper.map(solution, SolutionDto.class);
	}

	private Solution getSolutionByQuestionId(List<Solution> list,Integer questionId) {  
		
		
		for(int i=0;i<list.size();i++) {
			Integer questionId2 = list.get(i).getSolutionId().getQuestionId();
			if(questionId2.equals(questionId)) 
				return list.get(i);
			
		}
		return null;
		
	    
	}
	
	
	
	//write a method which return all solution of a question 

}

