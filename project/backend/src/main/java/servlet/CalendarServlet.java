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
import backend.CalendarFileStringSerializer;

@WebServlet( name = "CalendarServlet", urlPatterns = { "/calendar" } )
public class CalendarServlet extends HttpServlet
{
	/**
	 *
	 */
	private static final long serialVersionUID = 6532000220170482988L;

	@Override
	protected void doGet( final HttpServletRequest req, final HttpServletResponse resp ) throws ServletException, IOException
	{
		CalendarFileStringGenerator generator = new CalendarFileStringGenerator();
		CalendarFileStringSerializer serializer = new CalendarFileStringSerializer();
		String testString = generator.GenerateString();
		serializer.serialize(testString);
		final ServletOutputStream out = resp.getOutputStream();
		String fileName = "Assignments.ics";		
		InputStream fis = new ByteArrayInputStream(testString.getBytes(StandardCharsets.UTF_8));
		resp.setContentLength((int) testString.length());
		resp.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");
		
		ServletOutputStream os = resp.getOutputStream();
		byte[] bufferData = new byte[1024];
		int read=0;
		while((read = fis.read(bufferData))!= -1){
			os.write(bufferData, 0, read);
		}
		os.flush();
		os.close();
		fis.close();
		out.flush();
		out.close();
		System.out.println("File downloaded at client successfully");
	}
}
