package backend;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import objects.Calendar;
import objects.CalendarImpl;
import objects.Course;
import objects.CourseImpl;
import objects.Markable;
import objects.MarkableImpl;

public class CalendarFileStringGenerator
{

	// String to store raw data from JSON file.
	private String jsonData;

	// A list of events - each event is a list of event attributes.
	private final List< ArrayList< String > > events = new ArrayList< ArrayList< String > >();

	/*
	 * This method converts a JSON timestamp to a raw string event timestamp. This string timestamp can then be parsed to generate the event start time and end
	 * time
	 */
	public String jsonTimeStampToEventTimeStamp( final String jsonTimeStamp )
	{
		String eventTimeStamp = jsonTimeStamp.replace( "-", "" );
		eventTimeStamp = eventTimeStamp.replace( ":", "" );
		eventTimeStamp = eventTimeStamp.replace( "Z", "" );
		return eventTimeStamp;
	}

	//	Acts as a header and a footer to the BuildEvent call
	/*
	 * This method returns a string representing all events in events
	 */
	public String BuildEvents(Calendar calendar)
	{	
		//Header
		String calendarFileString = new StringBuilder()
			.append( String.format( "BEGIN:VCALENDAR\n" ) )
			.append( String.format( "VERSION:2.0\n" ) )
			.append( String.format( "CALSCALE:GREGORIAN\n" ) )
			.toString();
		final String footer = "END:VCALENDAR";
		
		for (Course course : calendar.getCourses()) {			
			//Add markables
			for (Markable markable : course.getMarkables()) {
				final String summary = markable.getMarkableName();
				final String description = markable.getWeight();
				final String startDateAndTime = jsonTimeStampToEventTimeStamp(markable.getDueDate());
				calendarFileString = calendarFileString + 
						(BuildEvent(course.getCourseCode() + " " + summary, startDateAndTime, description ));
			}
		}
		
		return calendarFileString + footer;
	}

	/*
	 * This method builds an event based on a summary of the event the start date and time, and an event description. A string representation of the event is
	 * returned.
	 */
	public String BuildEvent(
			final String summary,
			final String startDateAndTime,
			final String description )
	{

		final String hour = startDateAndTime.substring( 9, 11 );

		final int duration = 1;

		final int hourInt = Integer.parseInt( hour );

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

		// Construct a string representation of the event
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
	 * A method to read raw data from a file as a string. Saves this string in jsonData.
	 */
	public void readLinesInFile() throws IOException
	{
		final String filePath = "src/main/resources/hypotheticalOutput.json";
		jsonData = new String( Files.readAllBytes( Paths.get( filePath ) ), StandardCharsets.UTF_8 );
	}

	/*
	 * Using regular expressions, this method parses event data from the jsonData raw string data based on predefined event attributes. The attributes are added
	 * to the respective ArrayList representation of an event.
	 */
	// this will have to change to involve two different courses
	public Calendar parseJson() throws JsonParseException, JsonMappingException, IOException
	{
		ObjectMapper objectMapper = new ObjectMapper();
		List< Course > courseList = new ArrayList< Course >();
		List< Markable > markableList = new ArrayList< Markable >();

		markableList.add( new MarkableImpl( "Test", "Test", "Test" ) );
		courseList.add( new CourseImpl( "csc300", "csc300h1", markableList ) );
		Calendar calendar = new CalendarImpl( courseList );
		calendar = objectMapper.readValue(jsonData, CalendarImpl.class);
		return calendar;
	}

	/*
	 * This method reads events from a predefined JSON file and returns a string representation of all events.
	 */
	public String GenerateString() throws FileNotFoundException, IOException
	{
		final CalendarFileStringGenerator file = new CalendarFileStringGenerator();
		file.readLinesInFile();
		Calendar calendar = file.parseJson();
		final String eventsToWrite = file.BuildEvents(calendar);
		return eventsToWrite;
	}
	
	public static void main(String[] args) throws FileNotFoundException, IOException {
		CalendarFileStringGenerator c = new CalendarFileStringGenerator();
		c.GenerateString();
	}
}
