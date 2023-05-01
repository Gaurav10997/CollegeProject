package com.pinkcommunity.code.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pinkcommunity.code.entities.Solution;
import com.pinkcommunity.code.entities.SolutionId;

public interface SolutionRepo extends JpaRepository<Solution, SolutionId> {
	

}
