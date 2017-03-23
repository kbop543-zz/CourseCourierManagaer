package backend;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import objects.Course;
import objects.CourseImpl;
import objects.Markable;
import objects.MarkableImpl;

public class CourseExtractor
{
	// I dont know what format it is in fo for now I will write it like this.
	private final BufferedReader s;

	public CourseExtractor( final BufferedReader s )
	{
		this.s = s;
	}

	/*
	 * This method reads all lines from a file through the BufferedReader s. The lines are deliniated by newline characters.
	 */
	private String getFile()
	{

		final StringBuilder sb = new StringBuilder();
		String line;
		try
		{
			line = s.readLine();
			while( line != null )
			{
				sb.append( line + "\n" );
				line = s.readLine();
			}
		}
		catch( final IOException e )
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return sb.toString();

	}

	public Course run() throws Exception
	{
		// creating a new course
		Course course = null;
		final String file = getFile();
		String[] linesArray = file.split("\n");
		List<String> tmplines = Arrays.asList(linesArray);
		List<String> lines = new ArrayList<String>();
		for (String line : tmplines) {
			if (!line.isEmpty()) {
				lines.add(line);
			}
		}
		final String courseCode = lines.get(0);
		final String courseName = lines.get(1);
		lines.remove(courseCode);
		lines.remove(courseName);
		lines.remove(0); //markables line
		final List< Markable > markables = new ArrayList< Markable >();
		int numAttributes = 4;
		String mname = "";
		String percentage = "";
		String dueDate = "";
		String location = "";
		for (int i = 0; i < lines.size(); ++i) {
			switch (i % numAttributes) {
				case 0:
					mname = lines.get(i);
					break;
				case 1:  
					percentage = lines.get(i);
                    break;
	            case 2:  
	            	dueDate = lines.get(i);
                    break;
	            case 3:  
					location = lines.get(i);
					markables.add( new MarkableImpl( mname, percentage, dueDate, location));
                    break;
	            default: 
                    break;
			}	
		}
		course = new CourseImpl( courseCode, courseName, markables );
		return course;
	}
	
	public static void main(String[] args) throws Exception {	
		final String fileName = "src/main/resources/inputSyllabus";
		InputStream inputStream;
		try {
		    inputStream = new FileInputStream(fileName);
			final BufferedReader fileContents = new BufferedReader( new InputStreamReader( inputStream ) );
			final CourseExtractor courseExtractor = new CourseExtractor( fileContents );
			Course course = courseExtractor.run();
		    inputStream.close(); 
		} catch (FileNotFoundException e) {
		    // TODO Auto-generated catch block
		    e.printStackTrace();
		} catch (IOException e) {
		    // TODO Auto-generated catch block
		    e.printStackTrace();
		}
	}
}

