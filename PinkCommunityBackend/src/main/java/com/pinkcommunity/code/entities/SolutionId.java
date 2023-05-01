package com.pinkcommunity.code.entities;

import java.io.Serializable;
import java.util.Objects;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class SolutionId implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Integer userId;
	
	private Integer questionId;

	@Override
	public int hashCode() {
		return Objects.hash(questionId, userId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		SolutionId other = (SolutionId) obj;
		return Objects.equals(questionId, other.questionId) && Objects.equals(userId, other.userId);
	}
}
