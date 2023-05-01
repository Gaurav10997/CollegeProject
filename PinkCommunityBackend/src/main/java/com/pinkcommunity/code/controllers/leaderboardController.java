package com.pinkcommunity.code.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pinkcommunity.code.entities.User;
import com.pinkcommunity.code.payloads.UserDto;
import com.pinkcommunity.code.repositories.QuestionRepo;
import com.pinkcommunity.code.repositories.SolutionRepo;
import com.pinkcommunity.code.repositories.UserRepo;

@RestController
@RequestMapping("/pinkcommunity/api/")
public class leaderboardController {
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private SolutionRepo solutionRepo;
	
	@Autowired
	private QuestionRepo questionRepo;
	
	@GetMapping("/leaderboard")
	ResponseEntity<List<UserDto>> getLeaderBoard(){
		//List<UserDto> sortedList=new ArrayList<>();
		
		List<User> users = this.userRepo.findAll();
		users.forEach(user-> System.out.println(user.toString()));
		users.sort((u1,u2)->Integer.compare(u2.getScore(),u1.getScore()));
		List<UserDto> list = users.stream().map((user)->this.modelMapper.map(user, UserDto.class)).collect(Collectors.toList());
		return new ResponseEntity<List<UserDto>>(list,HttpStatus.OK);
		
	}
}
