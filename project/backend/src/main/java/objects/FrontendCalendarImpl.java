package objects;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Preconditions;

public class FrontendCalendarImpl implements FrontendCalendar
{

	private final List< FrontendCourse > courses;

	public FrontendCalendarImpl(
			@JsonProperty( "courses" ) final List< FrontendCourse > courses )
	{
		this.courses = Preconditions.checkNotNull( courses, "Precondition. courses is NULL in CalendarImpl::CalendarImpl" );
	}

	public List< FrontendCourse > getCourses()
	{
		return courses;
	}

}
