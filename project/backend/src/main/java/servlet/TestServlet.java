package servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet( name = "TestServlet", urlPatterns = { "/hello" } )
public class TestServlet extends HttpServlet
{

	/**
	 *
	 */
	private static final long serialVersionUID = -3330016715468250635L;

	@Override
	protected void doGet( final HttpServletRequest req, final HttpServletResponse resp ) throws ServletException, IOException
	{
		final ServletOutputStream out = resp.getOutputStream();
		out.write( "Yo fam its lit we got it working".getBytes() );
		out.flush();
		out.close();
	}

}
