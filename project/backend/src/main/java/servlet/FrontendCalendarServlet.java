package servlet;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import backend.CalendarFileStringGeneratorFrontend;
import objects.FrontendCalendar;

@WebServlet( name = "FrontendCalendarServlet", urlPatterns = { "/frontendCalendar" } )
public class FrontendCalendarServlet extends HttpServlet
{
	private static final long serialVersionUID = -1114470433997469171L;

	private final ObjectMapper objectMapper = new ObjectMapper();

	private final CalendarFileStringGeneratorFrontend calendarFileGenerator = new CalendarFileStringGeneratorFrontend();

	private FrontendCalendar calendarFromJson;

	@Override
	protected void doGet( final HttpServletRequest req, final HttpServletResponse resp ) throws ServletException, IOException
	{
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

	@Override
	protected void doPost( final HttpServletRequest req, final HttpServletResponse resp ) throws ServletException, IOException
	{
		final StringBuffer jb = new StringBuffer();
		String line = null;
		try
		{
			final BufferedReader reader = req.getReader();
			while( ( line = reader.readLine() ) != null )
			{
				jb.append( line );
			}
		}
		catch( final Exception e )
		{
			System.out.println( "POST: Failed to read request body" );
		}

		try
		{
			calendarFromJson = objectMapper.readValue( jb.toString(), FrontendCalendar.class );
		}
		catch( final Exception e )
		{
			System.out.println( "POST: Failed to parse JSON: " + jb.toString() );
		}
		System.out.println( "______________________________________" );
		System.out.println( "POST: Successfully parsed calendar! " + calendarFromJson.getCourses().get( 0 ).getCourseCode() );
		System.out.println( "______________________________________" );

	}


}
