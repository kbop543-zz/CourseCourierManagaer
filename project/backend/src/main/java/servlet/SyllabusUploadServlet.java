package servlet;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Paths;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

@MultipartConfig
@WebServlet( name = "SyllabusUploadServlet", urlPatterns = { "/uploadSyllabus" } )
public class SyllabusUploadServlet extends HttpServlet
{

	/**
	 *
	 */
	private static final long serialVersionUID = -7725319108833373363L;

	@Override
	protected void doPost( final HttpServletRequest req, final HttpServletResponse resp ) throws ServletException, IOException
	{
		final String description = req.getParameter( "description" ); // Retrieves <input type="text" name="description">

		final Part filePart = req.getPart( "file" ); // Retrieves <input type="file" name="file">

		final String fileName = Paths.get( filePart.getSubmittedFileName() ).getFileName().toString(); // MSIE fix.

		final InputStream fileContents = filePart.getInputStream();

		// regex reading of fileContents and creation of ClendarImpl, CourseImpl, and MarkableImpl objects

	}

}
