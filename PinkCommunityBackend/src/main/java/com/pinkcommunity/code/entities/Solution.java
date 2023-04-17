package com.pinkcommunity.code.entities;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="solutions")
public class Solution {
	
	@EmbeddedId
	private SolutionId solutionId=new SolutionId();
	
	@ManyToOne
	@MapsId("userId")
	@JoinColumn(name="user_id")
	private User user;
	
	@ManyToOne
	@MapsId("questionId")
	@JoinColumn(name="question_id")
	private Question question;
	
	private String answer;
	
	private Boolean attempt;
	
	private Boolean solved;

	@Override
	public String toString() {
		return "Solution [user=" + user + ", question=" + question + ", answer=" + answer + ", attempt=" + attempt
				+ ", solved=" + solved + "]";
	}
	
	

}
