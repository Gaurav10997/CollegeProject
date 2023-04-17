package com.pinkcommunity.code.controllers;

import java.util.List;

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
import com.pinkcommunity.code.payloads.CategoryDto;
import com.pinkcommunity.code.services.CategoryService;

@RestController
@RequestMapping("/pinkcommunity/api/")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	//create Category
	@PostMapping("/category/")
	public ResponseEntity<CategoryDto> createCategory(@RequestBody CategoryDto categoryDto) {
		CategoryDto createdCategory = this.categoryService.createCategory(categoryDto);
		return new ResponseEntity<CategoryDto>(createdCategory,HttpStatus.CREATED);
	}
	
	
	//update Category
	@PutMapping("/category/{categoryId}")
	public ResponseEntity<CategoryDto> updateCategory(@RequestBody CategoryDto categoryDto,@PathVariable Integer categoryId) {
		CategoryDto updatedCategory = this.categoryService.updateCategory(categoryDto,categoryId);
		return new ResponseEntity<CategoryDto>(updatedCategory,HttpStatus.ACCEPTED);
	}

	//get Category by id
	@GetMapping("/category/{categoryId}")
	public ResponseEntity<CategoryDto> getCategoryById(@PathVariable Integer categoryId){
		CategoryDto categoryDto=this.categoryService.getCategoryById(categoryId);
		return new ResponseEntity<CategoryDto>(categoryDto,HttpStatus.OK );
	}
	
	//get all category
	@GetMapping("/category/")
	public ResponseEntity<List<CategoryDto>> findAll(){
		
		List<CategoryDto> categories = this.categoryService.getAllCategory();
		return ResponseEntity.ok(categories);
		
	}
	
	//delete category
	@DeleteMapping("/category/{categoryId}")
	public ApiResponse deleteCategory(@PathVariable Integer categoryId) {
		this.categoryService.delete(categoryId);
		return new ApiResponse("User is deleted Successfully",true);
	}

}
