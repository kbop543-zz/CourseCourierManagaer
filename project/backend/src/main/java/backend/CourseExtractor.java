package backend;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.ArrayList;
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
		Course c = null;
		boolean t = true;//  to need not code an if statement each check

		final String file = getFile();
		final String line1 = file.split( "\n" )[0];
		// getting the matcher object hopefully ecliplse imports pattern as well.
		// 3 letters upper or lowecase followedby 3 digits to signify the course code
		Matcher m = Pattern.compile( "([a-z]{3}|[A-Z]{3})\\d{3}" ).matcher( line1 );
		t = m.find();
		if( !t )
		{
			throw new Exception();
		}
		final String coursecode = line1.substring( m.start(), m.end() );

		// I am considering the course name to be just the second line
		final String coursename = file.split( "\n" )[1];
		// creating the last final paramerter
		final List< Markable > lm = new ArrayList< Markable >();
		m = Pattern
			.compile( "[\\t \\n]*((A1|a1)|(A2|a2)|(A3|a3)|(Midterm|midterm)|(Exam|exam))[\\t \\n]+\\d{1,2}+%[\\t \\n]+20\\d{2}-(0[1-9]|1[0-2])-((0[1-9])|(1\\d)|(2\\d)|(30)|(31))[\\t \\n]+([0-1]\\d|2[0-4]):((0\\d)|(1\\d)|(2\\d)|(3\\d)|(4\\d)|(5\\d)):((0\\d)|(1\\d)|(2\\d)|(3\\d)|(4\\d)|(5\\d))[\\t \\n]*" )
			.matcher( file );
		t = m.find();
		if( !t )
		{
			throw new Exception();
		}
		String markable = file.substring( m.start(), m.end() );
		Matcher k = Pattern.compile( "((A1|a1)|(A2|a2)|(A3|a3)|(Midterm|midterm)|(Exam|exam))" ).matcher( markable );
		k.find();
		String mname = markable.substring( k.start(), k.end() );
		k = Pattern.compile( "\\d{1,2}+%" ).matcher( markable );
		k.find();
		String precentage = markable.substring( k.start(), k.end() );
		k = Pattern
			.compile( "20\\d{2}-(0[1-9]|1[0-2])-((0[1-9])|(1\\d)|(2\\d)|(30)|(31))[\\t \\n]+([0-1]\\d|2[0-4]):((0\\d)|(1\\d)|(2\\d)|(3\\d)|(4\\d)|(5\\d)):((0\\d)|(1\\d)|(2\\d)|(3\\d)|(4\\d)|(5\\d))" )
			.matcher( markable );
		k.find();
		lm.add( new MarkableImpl( mname, precentage, markable.substring( k.start(), k.end() ) ) );

		// second markable. will demand at least 3 the rest are free to go.
		t = m.find();
		if( !t )
		{
			throw new Exception();
		}
		markable = file.substring( m.start(), m.end() );
		k = Pattern.compile( "((A1|a1)|(A2|a2)|(A3|a3)|(Midterm|midterm)|(Exam|exam))" ).matcher( markable );
		k.find();
		mname = markable.substring( k.start(), k.end() );
		k = Pattern.compile( "\\d{1,2}+%" ).matcher( markable );
		k.find();
		precentage = markable.substring( k.start(), k.end() );
		k = Pattern
			.compile( "20\\d{2}-(0[1-9]|1[0-2])-((0[1-9])|(1\\d)|(2\\d)|(30)|(31))[\\t \\n]+([0-1]\\d|2[0-4]):((0\\d)|(1\\d)|(2\\d)|(3\\d)|(4\\d)|(5\\d)):((0\\d)|(1\\d)|(2\\d)|(3\\d)|(4\\d)|(5\\d))" )
			.matcher( markable );
		k.find();
		lm.add( new MarkableImpl( mname, precentage, markable.substring( k.start(), k.end() ) ) );


		// third markable

		t = m.find();
		if( !t )
		{
			throw new Exception();
		}
		markable = file.substring( m.start(), m.end() );
		k = Pattern.compile( "((A1|a1)|(A2|a2)|(A3|a3)|(Midterm|midterm)|(Exam|exam))" ).matcher( markable );
		k.find();
		mname = markable.substring( k.start(), k.end() );
		k = Pattern.compile( "\\d{1,2}+%" ).matcher( markable );
		k.find();
		precentage = markable.substring( k.start(), k.end() );
		k = Pattern
			.compile( "20\\d{2}-(0[1-9]|1[0-2])-((0[1-9])|(1\\d)|(2\\d)|(30)|(31))[\\t \\n]+([0-1]\\d|2[0-4]):((0\\d)|(1\\d)|(2\\d)|(3\\d)|(4\\d)|(5\\d)):((0\\d)|(1\\d)|(2\\d)|(3\\d)|(4\\d)|(5\\d))" )
			.matcher( markable );
		k.find();
		lm.add( new MarkableImpl( mname, precentage, markable.substring( k.start(), k.end() ) ) );

		//fourth non madatory
		t = m.find();
		if( t )
		{
			markable = file.substring( m.start(), m.end() );
			k = Pattern.compile( "((A1|a1)|(A2|a2)|(A3|a3)|(Midterm|midterm)|(Exam|exam))" ).matcher( markable );
			k.find();
			mname = markable.substring( k.start(), k.end() );
			k = Pattern.compile( "\\d{1,2}+%" ).matcher( markable );
			k.find();
			precentage = markable.substring( k.start(), k.end() );
			k = Pattern
				.compile( "20\\d{2}-(0[1-9]|1[0-2])-((0[1-9])|(1\\d)|(2\\d)|(30)|(31))[\\t \\n]+([0-1]\\d|2[0-4]):((0\\d)|(1\\d)|(2\\d)|(3\\d)|(4\\d)|(5\\d)):((0\\d)|(1\\d)|(2\\d)|(3\\d)|(4\\d)|(5\\d))" )
				.matcher( markable );
			k.find();
			lm.add( new MarkableImpl( mname, precentage, markable.substring( k.start(), k.end() ) ) );
		}

		//fith non madatory
		t = m.find();
		if( t )
		{
			markable = file.substring( m.start(), m.end() );
			k = Pattern.compile( "((A1|a1)|(A2|a2)|(A3|a3)|(Midterm|midterm)|(Exam|exam))" ).matcher( markable );
			k.find();
			mname = markable.substring( k.start(), k.end() );
			k = Pattern.compile( "\\d{1,2}+%" ).matcher( markable );
			k.find();
			precentage = markable.substring( k.start(), k.end() );
			k = Pattern
				.compile( "20\\d{2}-(0[1-9]|1[0-2])-((0[1-9])|(1\\d)|(2\\d)|(30)|(31))[\\t \\n]+([0-1]\\d|2[0-4]):((0\\d)|(1\\d)|(2\\d)|(3\\d)|(4\\d)|(5\\d)):((0\\d)|(1\\d)|(2\\d)|(3\\d)|(4\\d)|(5\\d))" )
				.matcher( markable );
			k.find();
			lm.add( new MarkableImpl( mname, precentage, markable.substring( k.start(), k.end() ) ) );
		}


		c = new CourseImpl( coursecode, coursename, lm );
		return c;
	}
}

