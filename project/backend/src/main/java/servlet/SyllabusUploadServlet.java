package servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

@WebServlet( name = "SyllabusUploadServlet", urlPatterns = { "/uploadSyllabus" } )
@MultipartConfig
public class SyllabusUploadServlet extends HttpServlet
{

	/**
	 *
	 */
	private static final long serialVersionUID = -7725319108833373363L;

	@Override
	protected void doPost( final HttpServletRequest req, final HttpServletResponse resp ) throws ServletException, IOException
	{
		//		final String description = req.getParameter( "description" ); // Retrieves <input type="text" name="description">

		final Part filePart = req.getPart( "syllabus" ); // Retrieves <input type="file" name="file">

		//		final String fileName = Paths.get( filePart.getSubmittedFileName() ).getFileName().toString(); // MSIE fix.

		final InputStream inputStream = filePart.getInputStream();
		final BufferedReader fileContents = new BufferedReader( new InputStreamReader( inputStream ) );

		System.out.println( fileContents.readLine() );

	}

}
