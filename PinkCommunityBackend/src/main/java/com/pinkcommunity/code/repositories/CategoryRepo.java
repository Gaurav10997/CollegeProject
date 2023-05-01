package com.pinkcommunity.code.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pinkcommunity.code.entities.Category;

public interface CategoryRepo extends JpaRepository<Category, Integer> {

}
