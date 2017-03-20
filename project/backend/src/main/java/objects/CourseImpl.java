package objects;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Objects;
import com.google.common.base.Preconditions;

public class CourseImpl implements Course
{

	private final String courseCode;

	private final String courseName;

	private final List< Markable > markables;

	public CourseImpl(
			@JsonProperty( "courseCode" ) final String code,
			@JsonProperty( "courseName" ) final String name,
			@JsonProperty( "markables" ) final List< Markable > markables )
	{

		this.courseCode = Preconditions.checkNotNull( code, "Precondition. code is NULL in CourseImpl::CourseImpl" );
		this.courseName = Preconditions.checkNotNull( name, "Precondition. description is NULL in CourseImpl::CourseImpl" );
		this.markables = Preconditions.checkNotNull( markables, "Precondition. markables is NULL in CourseImpl::CourseImpl" );
	}

	public String getCourseCode()
	{
		return courseCode;
	}

	public String getCourseDescription()
	{
		return courseName;
	}

	public List< Markable > getMarkables()
	{
		return markables;
	}

	@Override
	public int hashCode()
	{
		return Objects.hashCode( courseCode, courseName, markables );
	}

	@Override
	public boolean equals( final Object object )
	{
		if( object instanceof CourseImpl )
		{
			final CourseImpl that = (CourseImpl)object;
			return Objects.equal( this.courseCode, that.courseCode ) && Objects.equal( this.courseName, that.courseName ) && Objects.equal( this.markables, that.markables );
		}
		return false;
	}

}
