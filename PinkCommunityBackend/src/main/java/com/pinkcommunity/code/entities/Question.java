package com.pinkcommunity.code.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="questions")
public class Question {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer questionId;
	
	@Column(name="score")
	private Integer questionScore;
	
	@Column(name="title")
	private String questionTitle;
	
	@Column(name="level")
	private String questionLevel;
	
	@Column(name="description")
	private String questionDescription;
	
	@Column(name="example")
	private String questionExample;
	
	@OneToMany(mappedBy="question",cascade=CascadeType.ALL)
	private List<Solution> solution=new ArrayList<>();
	
	//relation development
	
	@ManyToOne
	@JoinColumn(name="category_id")
	private Category category;

	@Override
	public String toString() {
		return "Question [questionId=" + questionId + ", questionScore=" + questionScore + ", questionTitle="
				+ questionTitle + ", questionLevel=" + questionLevel + ", questionDescription=" + questionDescription
				+ ", questionExample=" + questionExample + "]";
	}
	
	
	
	
}
