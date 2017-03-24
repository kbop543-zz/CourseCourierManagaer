package objects;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize( as = FrontendCalendarImpl.class )
public interface FrontendCalendar
{
	/**
	 * Gets the Course for the class
	 * @return the Course of the class
	 */
	@JsonProperty( "courses" )
	public List< FrontendCourse > getCourses();
}
