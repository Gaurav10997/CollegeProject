package com.pinkcommunity.code.controllers;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pinkcommunity.code.payloads.ApiResponse;
import com.pinkcommunity.code.payloads.SolutionDto;
import com.pinkcommunity.code.payloads.UserDto;
import com.pinkcommunity.code.services.UserService;

import ch.qos.logback.core.pattern.util.RegularEscapeUtil;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/pinkcommunity/api/")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	
	
//	Post mapping create User
	@PostMapping("/user/")
	public ResponseEntity<UserDto> createUser(@Valid @RequestBody UserDto userDto){
		
		UserDto createdUserDto = this.userService.createUser(userDto);
		return new ResponseEntity<UserDto>(createdUserDto,HttpStatus.CREATED);
		
	}
	
	
//	PUT  update User
	@PutMapping("/user/{userId}")
	public ResponseEntity<UserDto> updateUser(@Valid @RequestBody UserDto userDto ,@PathVariable Integer userId ){
		UserDto updatedUser = this.userService.updateUser(userDto, userId);
		return new ResponseEntity<UserDto>(updatedUser,HttpStatus.OK);
		//check http status code for update
		
	}
	
	
	
	
//	GET get User by Id
	@GetMapping("/user/{userId}")
	public ResponseEntity<UserDto> getUserById(@PathVariable Integer userId){
		UserDto userDto=this.userService.getUserById(userId);
		return new ResponseEntity<UserDto>(userDto,HttpStatus.ACCEPTED);
		//check HTTP status code
		
	}
	
//	 GET get all User
	@GetMapping("/user")
	public ResponseEntity<List<UserDto>> getAlluser(){
		List<UserDto> userDtos=this.userService.getAllUser();
		return new ResponseEntity<List<UserDto>>(userDtos,HttpStatus.OK);

		
	}
	
	
//	DELETE delete user
	@DeleteMapping("/user/{userId}")
	public ResponseEntity<ApiResponse> deleteUser(@PathVariable Integer userId){
		this.userService.deleteUser(userId);
		
		return new ResponseEntity<ApiResponse>(new ApiResponse("User is deleted Successfully",true),HttpStatus.OK);
	}
	
//	UPLOAD Solution
	
	@PostMapping("/user/{userId}/question/{questionId}/submit")
	public ResponseEntity<SolutionDto> uploadSolution(@RequestBody SolutionDto solutionDto,@PathVariable Integer userId,@PathVariable Integer questionId){
		
		SolutionDto uploadSolution = this.userService.uploadSolution(solutionDto, userId, questionId);
		return new ResponseEntity<SolutionDto>(uploadSolution,HttpStatus.ACCEPTED);
		
		
	}

	@GetMapping("/user/{userId}/solution")
	public ResponseEntity<List<SolutionDto>> getSolutionByUserId(@PathVariable Integer userId){
		List<SolutionDto> solutionDtos = this.userService.getSolutionByUserId(userId);
		return ResponseEntity.ok(solutionDtos);
		
	}
	
	@GetMapping("/user/{userId}/question/{questionId}/solution")
	public ResponseEntity<SolutionDto> getSolutionByUserIdAndQuestionId(@PathVariable Integer userId,@PathVariable Integer questionId){
		
		SolutionDto solutionDto = this.userService.getSolutionByUserIdAndQuestionId(userId, questionId);
		return new ResponseEntity<SolutionDto>(solutionDto,HttpStatus.OK);
		
		
	}
	

}
