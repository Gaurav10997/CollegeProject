package com.pinkcommunity.code.payloads;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {
	
	private Integer id;
	
	@NotEmpty
	@Size(min=4,message = "username must be of 4 characters")
	private String name;
	
	@Email(message="Email address is not valid!!")
	private String email;
	
	@NotBlank
	@Size(min=6,max=16,message="password should be of 6-16 character")
	private String password;
	
	
	private String about;
	
	
	private Integer score;
	private Integer contestScore;

}
