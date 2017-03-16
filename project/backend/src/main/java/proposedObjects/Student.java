package proposedObjects;

import java.util.HashMap;
import java.util.Map;

import objects.Calendar;

public class Student implements User
{

	private Map< String, Calendar > calendars = new HashMap< String, Calendar >();

	private String name;

	private String userName;

	private String password;

	private String email;

	private String institution;

	public Student(
			final String name,
			final String userName,
			final String password,
			final String email,
			final String institution )
	{

		this.name = name;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.institution = institution;
	}

	public Student(
			final Map< String, Calendar > calendars,
			final String name,
			final String userName,
			final String password,
			final String email,
			final String institution )
	{

		this( name, userName, password, email, institution );

		this.calendars = calendars;
	}

	public void addCalendar( final String calID, final Calendar cal )
	{
		this.calendars.put( calID, cal );
	}

	public void deleteCalendar( final String calID )
	{
		this.calendars.remove( calID );
	}

	public Calendar getCalendar( final String calID )
	{
		return this.calendars.get( calID );
	}

	public void addEvent( final String calID, final Event event )
	{

	}

	public void deleteEvent( final String calID, final String eventID )
	{

	}

	public Event getEvent( final String calID, final String eventID )
	{
		return null;
	}

	public String getName()
	{
		// TODO Auto-generated method stub
		return this.name;
	}

	public String getUserName()
	{
		// TODO Auto-generated method stub
		return this.userName;
	}

	public String getPassword()
	{
		// TODO Auto-generated method stub
		return this.password;
	}

	public String getEmail()
	{
		// TODO Auto-generated method stub
		return this.email;
	}

	public String getInstitution()
	{
		// TODO Auto-generated method stub
		return this.institution;
	}

	public void setName( final String name )
	{
		// TODO Auto-generated method stub
		this.name = name;
	}

	public void setUserName( final String userName )
	{
		// TODO Auto-generated method stub
		this.userName = userName;
	}

	public void setPassword( final String password )
	{
		// TODO Auto-generated method stub
		this.password = password;
	}

	public void setEmail( final String email )
	{
		// TODO Auto-generated method stub
		this.email = email;
	}

	public void setInstitution( final String institution )
	{
		// TODO Auto-generated method stub
		this.institution = institution;
	}

}
