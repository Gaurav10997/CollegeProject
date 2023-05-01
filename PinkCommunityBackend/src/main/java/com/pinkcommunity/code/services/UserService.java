package com.pinkcommunity.code.services;


import java.util.List;

import com.pinkcommunity.code.payloads.SolutionDto;
import com.pinkcommunity.code.payloads.UserDto;

public interface UserService {
	
	UserDto createUser(UserDto userDto);
	UserDto updateUser(UserDto userDto,Integer userId);
	void deleteUser(Integer userId);
	UserDto getUserById(Integer userId);
	List<UserDto> getAllUser();
	
	//want to add get contest score by id
	//map<Integer,name> getScoreById(Integer id)
	
	
	//upload solution based on user id
    SolutionDto uploadSolution(SolutionDto solutionDto,Integer userId,Integer questionId);
    
    
    //get solution by user id
    List<SolutionDto> getSolutionByUserId(Integer userId);
    
    
    //get solution by userId and questionId
    SolutionDto getSolutionByUserIdAndQuestionId(Integer userId,Integer questionId);
	
	

}
