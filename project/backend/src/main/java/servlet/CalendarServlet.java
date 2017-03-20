package servlet;

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

import backend.CalendarFileStringGenerator;

@WebServlet( name = "CalendarServlet", urlPatterns = { "/calendar" } )
public class CalendarServlet extends HttpServlet
{
	/*
	 * This servlet uses a calendarFileStringGenerator to develop a string representation of all events in a JSON file predefined in the
	 * calendarFileStringGenerator class.
	 */
	private static final long serialVersionUID = 6532000220170482988L;

	@Override
	protected void doGet( final HttpServletRequest req, final HttpServletResponse resp ) throws ServletException, IOException
	{
		// Get a string representation of events in the JSON file
		final CalendarFileStringGenerator generator = new CalendarFileStringGenerator();
		final String calendarString = generator.GenerateString();

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
