package com.pinkcommunity.code.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pinkcommunity.code.entities.User;

public interface UserRepo extends JpaRepository<User, Integer> {
	

}
