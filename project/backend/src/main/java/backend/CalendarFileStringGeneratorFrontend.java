package backend;

import java.io.FileNotFoundException;
import java.io.IOException;

import objects.FrontendCalendar;
import objects.FrontendCourse;
import objects.FrontendMarkable;

public class CalendarFileStringGeneratorFrontend
{
	public String jsonTimeStampToEventTimeStamp( final String jsonTimeStamp )
	{
		String eventTimeStamp = jsonTimeStamp.replace( "-", "" );
		eventTimeStamp = eventTimeStamp.replace( ":", "" );
		eventTimeStamp = eventTimeStamp.replace( "Z", "" );
		return eventTimeStamp;
	}

	public String buildEvent(
			final String summary,
			final String startDateAndTime,
			final String description )
	{
		final String hour = startDateAndTime.substring( 9, 11 ).replaceAll( "[^\\d]", "" );;
		final int duration = 1;
		final int hourInt = Integer.parseInt( hour.trim() );
		final int newHourInt = hourInt + duration;
		final String newHourString = Integer.toString( newHourInt );
		final String endDateAndTime = startDateAndTime.substring( 0, 9 ) + newHourString + startDateAndTime.substring( 11, startDateAndTime.length() );
		//		String location = location == null ? "BA 1200" : location;
		final String location = "";
		final String exDateAndTime = startDateAndTime;
		final String trigger = "-PT1H";
		final String repeat = "4";
		final String alarmDuration = "PT15M";
		final String alarmDescription = summary;
		final String event = new StringBuilder()
				.append( String.format( "BEGIN:VEVENT\n" ) )
				.append( String.format( "SUMMARY:%s\n", summary ) )
				.append( String.format( "DTSTART;TZID=America/Toronto:%s\n", startDateAndTime ) )
				.append( String.format( "DTEND;TZID=America/Toronto:%s\n", endDateAndTime ) )
				.append( String.format( "DESCRIPTION:%s\n", description ) )
				.append( String.format( "LOCATION:%s\n", location ) )
				.append( String.format( "EXDATE;TZID=America/Toronto:%s\n", exDateAndTime ) )
				.append( String.format( "BEGIN:VALARM\n" ) )
				.append( String.format( "TRIGGER:%s\n", trigger ) )
				.append( String.format( "REPEAT:%s\n", repeat ) )
				.append( String.format( "DURATION:%s\n", alarmDuration ) )
				.append( String.format( "DESCRIPTION:%s\n", alarmDescription ) )
				.append( String.format( "END:VALARM\n" ) )
				.append( String.format( "END:VEVENT\n" ) )
				.toString();
		return event;
	}


	/*
	 * This method reads events from a calendar and returns a string representation of all events.
	 */
	public String generateStringFromCalendar( final FrontendCalendar calendar ) throws FileNotFoundException, IOException
	{
		//Header
		String calendarFileString = new StringBuilder()
				.append( String.format( "BEGIN:VCALENDAR\n" ) )
				.append( String.format( "VERSION:2.0\n" ) )
				.append( String.format( "CALSCALE:GREGORIAN\n" ) )
				.toString();
		final String footer = "END:VCALENDAR";

		for( final FrontendCourse course : calendar.getCourses() )
		{
			for( final FrontendMarkable markable : course.getMarkables() )
			{
				final String markableName = markable.getMarkableName();
				final String markableWeight = markable.getWeight();
				final String dueDate = jsonTimeStampToEventTimeStamp( markable.getDueDate() );
				calendarFileString = calendarFileString + ( buildEvent( course.getCourseCode() + " " + markableName, dueDate,
						markableWeight ) );
			}
		}

		return calendarFileString + footer;
	}

}
