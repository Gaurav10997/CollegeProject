package com.pinkcommunity.code.payloads;


import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CategoryDto {
	
	
	Integer categoryId;
	
	
	@NotEmpty
	String categoryTitle;
	
	@NotEmpty
	String categoryDescription;

}
