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

import backend.CourseExtractor;
import objects.Course;

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
		final Part filePart = req.getPart( "syllabus" ); // Retrieves <input type="file" name="file">
		//		final String fileName = Paths.get( filePart.getSubmittedFileName() ).getFileName().toString(); // If we ever want to reference the original filename
		final InputStream inputStream = filePart.getInputStream();
		final BufferedReader fileContents = new BufferedReader( new InputStreamReader( inputStream ) );
		final CourseExtractor syllabusExtractor = new CourseExtractor( fileContents );

		try
		{
			final Course courseFromSyllabus = syllabusExtractor.run();

			System.out.println( "" );
			System.out.println( "HERE IS EVERYTHING, BUT PARSED AND INTO JAVA OBJECTS!" );
			System.out.println( "" );

			System.out.println( courseFromSyllabus.getCourseCode() );
			System.out.println( courseFromSyllabus.getCourseDescription() );
			System.out.println( courseFromSyllabus.getMarkables().get( 0 ).getMarkableName() );
			System.out.println( courseFromSyllabus.getMarkables().get( 0 ).getWeight() );
			System.out.println( courseFromSyllabus.getMarkables().get( 0 ).getDueDate() );
			System.out.println( courseFromSyllabus.getMarkables().get( 1 ).getMarkableName() );
			System.out.println( courseFromSyllabus.getMarkables().get( 1 ).getWeight() );
			System.out.println( courseFromSyllabus.getMarkables().get( 1 ).getDueDate() );
			System.out.println( courseFromSyllabus.getMarkables().get( 2 ).getMarkableName() );
			System.out.println( courseFromSyllabus.getMarkables().get( 2 ).getWeight() );
			System.out.println( courseFromSyllabus.getMarkables().get( 2 ).getDueDate() );
			System.out.println( courseFromSyllabus.getMarkables().get( 3 ).getMarkableName() );
			System.out.println( courseFromSyllabus.getMarkables().get( 3 ).getWeight() );
			System.out.println( courseFromSyllabus.getMarkables().get( 3 ).getDueDate() );
			System.out.println( courseFromSyllabus.getMarkables().get( 4 ).getMarkableName() );
			System.out.println( courseFromSyllabus.getMarkables().get( 4 ).getWeight() );
			System.out.println( courseFromSyllabus.getMarkables().get( 4 ).getDueDate() );

			System.out.println( "" );

		}
		catch( final Exception e )
		{
			System.out.println( "FAILED TO PARSE SYLLABUS" );
			e.printStackTrace();
		}

	}

}