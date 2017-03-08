package objects;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Preconditions;

public class CalendarImpl implements Calendar
{

	private final List< Course > courses;

	public CalendarImpl(
			@JsonProperty( "courses" ) final List< Course > courses )
	{
		this.courses = Preconditions.checkNotNull( courses, "Precondition. courses is NULL in CalendarImpl::CalendarImpl" );
	}

	public List< Course > getMarkables()
	{
		return courses;
	}

}
