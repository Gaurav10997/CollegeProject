package com.pinkcommunity.code.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pinkcommunity.code.entities.Category;
import com.pinkcommunity.code.entities.Question;

public interface QuestionRepo extends JpaRepository<Question, Integer> {

	List<Question> findByCategory(Category category);
}
