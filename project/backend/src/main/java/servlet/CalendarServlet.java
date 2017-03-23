package servlet;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import backend.CalendarFileStringGenerator;
import backend.CourseExtractor;
import objects.Course;

@WebServlet( name = "CalendarServlet", urlPatterns = { "/calendar" } )
@MultipartConfig
public class CalendarServlet extends HttpServlet
{
	/*
	 * This servlet uses a calendarFileStringGenerator to develop a string representation of all events in a JSON file predefined in the
	 * calendarFileStringGenerator class.
	 */
	private static final long serialVersionUID = 6532000220170482988L;

	private final List< Course > uploadedCourses = new ArrayList< Course >();

	@Override
	protected void doGet( final HttpServletRequest req, final HttpServletResponse resp ) throws ServletException, IOException
	{
		// Get a string representation of events in the JSON file
		final CalendarFileStringGenerator generator = new CalendarFileStringGenerator();
		final String calendarString = generator.generateStringFromCalendar(uploadedCourses);


		final ServletOutputStream out = resp.getOutputStream();
		final String fileName = "Assignments.ics";
		final InputStream fis = new ByteArrayInputStream( calendarString.getBytes( StandardCharsets.UTF_8 ) );
		resp.setContentLength( calendarString.length() );
		resp.setHeader( "Content-Disposition", "attachment; filename=\"" + fileName + "\"" );

		final ServletOutputStream os = resp.getOutputStream();
		final byte[] bufferData = new byte[1024];
		int read = 0;
		while( ( read = fis.read( bufferData ) ) != -1 )
		{
			os.write( bufferData, 0, read );
		}
		os.flush();
		os.close();
		fis.close();
		out.flush();
		out.close();
		System.out.println( "File downloaded at client successfully" );
	}


	@Override
	protected void doPost( final HttpServletRequest req, final HttpServletResponse resp ) throws ServletException, IOException
	{
		final Part filePart = req.getPart( "file" ); // Retrieves <input type="file" name="file">
		//		final String fileName = Paths.get( filePart.getSubmittedFileName() ).getFileName().toString(); // If we ever want to reference the original filename
		final InputStream inputStream = filePart.getInputStream();
		final BufferedReader fileContents = new BufferedReader( new InputStreamReader( inputStream ) );
		final CourseExtractor syllabusExtractor = new CourseExtractor( fileContents );

		// ^^ Basically all preface to do the work

		try
		{
			//turns the file into a Course object
			final Course extractedCourse = syllabusExtractor.run();
			//appends that course to our list of objects we've got
			uploadedCourses.add( extractedCourse );


			System.out.println( "" );
			System.out.println( "THESE ARE ALL THE COURSES WE'VE UPLOADED SO FAR " );
			System.out.println( "" );

			for( final Course course : uploadedCourses )
			{
				System.out.println( "" );
				System.out.println( "HERE IS A COURSE, BUT PARSED AND INTO JAVA OBJECTS!" );
				System.out.println( "" );
				System.out.println( course.getCourseCode() );
				System.out.println( course.getCourseDescription() );
				System.out.println( course.getMarkables().get( 0 ).getMarkableName() );
				System.out.println( course.getMarkables().get( 0 ).getWeight() );
				System.out.println( course.getMarkables().get( 0 ).getDueDate() );
				System.out.println( course.getMarkables().get( 0 ).getLocation() );
				System.out.println( course.getMarkables().get( 1 ).getMarkableName() );
				System.out.println( course.getMarkables().get( 1 ).getWeight() );
				System.out.println( course.getMarkables().get( 1 ).getDueDate() );
				System.out.println( course.getMarkables().get( 1 ).getLocation() );
				System.out.println( course.getMarkables().get( 2 ).getMarkableName() );
				System.out.println( course.getMarkables().get( 2 ).getWeight() );
				System.out.println( course.getMarkables().get( 2 ).getDueDate() );
				System.out.println( course.getMarkables().get( 2 ).getLocation() );
				System.out.println( course.getMarkables().get( 3 ).getMarkableName() );
				System.out.println( course.getMarkables().get( 3 ).getWeight() );
				System.out.println( course.getMarkables().get( 3 ).getDueDate() );
				System.out.println( course.getMarkables().get( 3 ).getLocation() );
				System.out.println( course.getMarkables().get( 4 ).getMarkableName() );
				System.out.println( course.getMarkables().get( 4 ).getWeight() );
				System.out.println( course.getMarkables().get( 4 ).getDueDate() );
				System.out.println( course.getMarkables().get( 4 ).getLocation() );
				System.out.println( "" );
			}
		}
		catch( final Exception e )
		{
			System.out.println( "FAILED TO PARSE SYLLABUS" );
			e.printStackTrace();
		}
	}
}
