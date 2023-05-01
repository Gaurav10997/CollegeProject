package com.pinkcommunity.code.services;

import java.util.List;

import com.pinkcommunity.code.payloads.CategoryDto;

public interface CategoryService {

	//create
	CategoryDto createCategory(CategoryDto categoryDto);
	
	//update
	CategoryDto updateCategory(CategoryDto categoryDto,Integer categoryId);
	
	//delete
	void delete(Integer categoryId);
	
	//get
	CategoryDto getCategoryById(Integer categoryId);
	
	
	//get all
	List<CategoryDto> getAllCategory();
}
