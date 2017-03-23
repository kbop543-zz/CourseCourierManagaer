package servlet;

import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import objects.Calendar;
import objects.CalendarImpl;
import objects.Course;
import objects.CourseImpl;
import objects.Markable;
import objects.MarkableImpl;


@WebServlet( name = "CalendarJsonServlet", urlPatterns = { "/calendarJson" } )
public class CalendarJsonServlet extends HttpServlet
{
	private Calendar calendar;

	/**
	 *
	 */
	private static final long serialVersionUID = -8571213429382972390L;

	public void createCalendar()
	{
		final List< Course > courseList = new ArrayList< Course >();
		final List< Markable > markableList = new ArrayList< Markable >();

		markableList.add( new MarkableImpl( "A1", "10%", "2017-01-26T16:00:00Z", "Not applicable" ) );
		markableList.add( new MarkableImpl( "A2", "15%", "2017-02-16T16:00:00Z", "Not applicable" ) );
		markableList.add( new MarkableImpl( "A3", "20%", "2017-02-28T16:00:00Z", "Not applicable" ) );
		markableList.add( new MarkableImpl( "Midterm", "25%", "2017-03-17T16:00:00Z", "EX100" ) );
		markableList.add( new MarkableImpl( "Exam", "30%", "2017-04-02T18:00:00Z", "EX200" ) );
		courseList.add( new CourseImpl( "csc300", "csc300h1", markableList ) );
		courseList.add( new CourseImpl( "csc301", "csc301h1", markableList ) );
		courseList.add( new CourseImpl( "csc302", "csc302h1", markableList ) );
		courseList.add( new CourseImpl( "csc303", "csc303h1", markableList ) );
		courseList.add( new CourseImpl( "csc304", "csc304h1", markableList ) );

		calendar = new CalendarImpl( courseList );
	}

	@Override
	protected void doGet( final HttpServletRequest req, final HttpServletResponse resp ) throws ServletException, IOException
	{
		createCalendar();
		final ObjectMapper objectMapper = new ObjectMapper();
		final OutputStream out = resp.getOutputStream();
		objectMapper.writeValue( out, calendar );
		out.flush();
		out.close();
		System.out.println( objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString( calendar ) );
	}

}
