package objects;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize( as = FrontendCourseImpl.class )
public interface FrontendCourse
{
	/**
	 * Gets the code of the class
	 * @return the code of the class
	 */
	@JsonProperty( "courseCode" )
	public String getCourseCode();

	/**
	 * Gets the name of the class
	 * @return the name of the class
	 */
	@JsonProperty( "courseName" )
	public String getCourseDescription();

	/**
	 * Gets the grade of the class
	 * @return the grade of the class
	 */
	@JsonProperty( "grade" )
	public float getGrade();

	/**
	 * Gets the markables for the class
	 * @return the markables of the class
	 */
	@JsonProperty( "markables" )
	public List< FrontendMarkable > getMarkables();
}

