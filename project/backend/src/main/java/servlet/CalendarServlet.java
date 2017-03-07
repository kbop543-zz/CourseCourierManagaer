package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
		final ServletOutputStream out = resp.getOutputStream();
		out.write( "Yo fam here's a calendar file".getBytes() );
		out.flush();
		out.close();
	}
}
