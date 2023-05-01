package com.pinkcommunity.code.services.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pinkcommunity.code.entities.Category;
import com.pinkcommunity.code.exceptions.ResourceNotFoundException;
import com.pinkcommunity.code.payloads.CategoryDto;
import com.pinkcommunity.code.repositories.CategoryRepo;
import com.pinkcommunity.code.services.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepo categoryRepo;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	
	@Override
	public CategoryDto createCategory(CategoryDto categoryDto) {
		
		System.out.println("\n\n\n"+categoryDto.getCategoryTitle());
		System.out.println("\n\n\n"+categoryDto.getCategoryDescription());
		
		Category category = this.modelMapper.map(categoryDto,Category.class);
		
		Category savedCategory = this.categoryRepo.save(category);
		return this.modelMapper.map(savedCategory, CategoryDto.class);
	}

	@Override
	public CategoryDto updateCategory(CategoryDto categoryDto, Integer categoryId) {
		
		Category category=this.categoryRepo.findById(categoryId).orElseThrow(()->
		new ResourceNotFoundException("Category", "Id", Integer.toString(categoryId)));
		
		category.setCategoryTitle(categoryDto.getCategoryTitle());
		category.setCategoryDescription(categoryDto.getCategoryDescription());
		
		Category savedCategory = this.categoryRepo.save(category);
		
		return this.modelMapper.map(savedCategory, CategoryDto.class);
		
	}

	@Override
	public void delete(Integer categoryId) {
		Category category=this.categoryRepo.findById(categoryId).orElseThrow(()->
		new ResourceNotFoundException("Category", "Id", Integer.toString(categoryId)));
		
		this.categoryRepo.delete(category);
		

	}

	@Override
	public CategoryDto getCategoryById(Integer categoryId) {
		
		Category category=this.categoryRepo.findById(categoryId).orElseThrow(()->
			new ResourceNotFoundException("Category", "Id", Integer.toString(categoryId)));

		
		return this.modelMapper.map(category, CategoryDto.class);
		
	}

	@Override
	public List<CategoryDto> getAllCategory() {
		
		List<Category> categories = this.categoryRepo.findAll();
		
		List<CategoryDto> categororyDtos = categories.stream().map((category)->
			this.modelMapper.map(category, CategoryDto.class)).collect(Collectors.toList());
		
		return categororyDtos;
	}

}
