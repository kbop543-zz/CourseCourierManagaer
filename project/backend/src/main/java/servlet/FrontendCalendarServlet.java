package servlet;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import backend.CalendarFileStringGeneratorFrontend;
import objects.FrontendCalendar;

@WebServlet( name = "CalendarServlet", urlPatterns = { "/frontendCalendar" } )
public class FrontendCalendarServlet extends HttpServlet
{
	private static final long serialVersionUID = -1114470433997469171L;

	private final ObjectMapper objectMapper = new ObjectMapper();

	private final CalendarFileStringGeneratorFrontend calendarFileGenerator = new CalendarFileStringGeneratorFrontend();


	@Override
	protected void doGet( final HttpServletRequest req, final HttpServletResponse resp ) throws ServletException, IOException
	{

		System.out.println( "______________________________________" );
		final Enumeration params = req.getParameterNames();
		while( params.hasMoreElements() )
		{
			final String paramName = (String)params.nextElement();
			System.out.println( paramName );
			System.out.println( "Parameter Name - " + paramName + ", Value - " + req.getParameter( paramName ) );
		}
		System.out.println( "______________________________________" );
		final String jsonData = req.getParameter( "data" );
		System.out.println( jsonData );
		System.out.println( "______________________________________" );

		final FrontendCalendar calendarFromJson = objectMapper.readValue( jsonData, FrontendCalendar.class );

		// Get a string representation of events
		//		final String calendarString = calendarFileGenerator.generateStringFromCalendar( uploadedCourses ); when reading locally uploaded files

		final String calendarString = calendarFileGenerator.generateStringFromCalendar( calendarFromJson );



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

}
