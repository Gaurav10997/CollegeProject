package com.pinkcommunity.code.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
public class User {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userId;
	
	@Column(name="user_name",nullable = false, length=100)
	private String name;
	
	@OneToMany(mappedBy="user",cascade=CascadeType.ALL)
	private List<Solution> solution=new ArrayList<>();

	private String email;
	private String about;
	private String password;
	private Integer score=0;
	private Integer contestScore;
	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", email=" + email + ", about=" + about + ", password="
				+ password + "]";
	}
	
	
	
}
