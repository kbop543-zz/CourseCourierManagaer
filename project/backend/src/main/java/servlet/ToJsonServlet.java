package servlet;

import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.base.Objects;
import com.google.common.base.Preconditions;

import objects.Calendar;
import objects.CalendarImpl;
import objects.Course;
import objects.CourseImpl;
import objects.Markable;
import objects.MarkableImpl;


@WebServlet( name = "ToJsonServlet", urlPatterns = { "/CalendartToJsonObjectConverter" } )
public class ToJsonServlet extends HttpServlet {
	private Calendar c;
	/**
	 * 
	 */
	private static final long serialVersionUID = -8571213429382972390L;
	
	public void getCalendar(){
		List<Course> lc = new ArrayList<Course>();
		List<Markable> lm = new ArrayList<Markable>();
		lm.add(new Ma("p1", "w1", "x1"));
		lm.add(new Ma("p2", "w2", "x2"));
		lm.add(new Ma("p3", "w3", "x3"));
		lm.add(new Ma("p4", "w4", "x4"));
		lm.add(new Ma("p5", "w5", "x5"));
		lc.add(new Co("csc300", "csc300h1",lm.subList(0, 1) ));
		lc.add(new Co("csc301", "csc301h1",lm.subList(0, 2) ));
		lc.add(new Co("csc302", "csc302h1",lm.subList(0, 3) ));
		lc.add(new Co("csc303", "csc303h1",lm.subList(0, 4) ));
		lc.add(new Co("csc304", "csc304h1",lm.subList(0, 5) ));
		c = new C(lc); 
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		getCalendar();
		ObjectMapper om = new ObjectMapper();
		OutputStream out = resp.getOutputStream();
		om.writeValue(out, c);
		out.flush();
		out.close();
		System.out.println(om.writerWithDefaultPrettyPrinter().writeValueAsString(c));
		
		
		
		
	}

	
	
	// bellow here is just the tools I need to create an example test
	class C implements Calendar{


		private final List< Course > courses;

		public C(
				@JsonProperty( "courses" ) final List< Course > courses )
		{
			this.courses = Preconditions.checkNotNull( courses, "Precondition. courses is NULL in CalendarImpl::CalendarImpl" );
		}

		public List< Course > getMarkables()
		{
			return courses;
		}
		
	}
	
	
	
	class Co implements Course{

		private final String courseCode;

		private final String courseName;

		private final List< Markable > markables;

		public Co(
				@JsonProperty( "courseCode" ) final String code,
				@JsonProperty( "courseName" ) final String name,
				@JsonProperty( "markables" ) final List< Markable > markables )
		{

			this.courseCode = Preconditions.checkNotNull( code, "Precondition. code is NULL in CourseImpl::CourseImpl" );
			this.courseName = Preconditions.checkNotNull( name, "Precondition. description is NULL in CourseImpl::CourseImpl" );
			this.markables = Preconditions.checkNotNull( markables, "Precondition. markables is NULL in CourseImpl::CourseImpl" );
		}

		public String getCourseCode()
		{
			return courseCode;
		}

		public String getCourseDescription()
		{
			return courseName;
		}

		public List< Markable > getMarkables()
		{
			return markables;
		}

		@Override
		public int hashCode()
		{
			return Objects.hashCode( courseCode, courseName, markables );
		}

		@Override
		public boolean equals( final Object object )
		{
			if( object instanceof Co )
			{
				final Co that = (Co)object;
				return Objects.equal( this.courseCode, that.courseCode )
						&& Objects.equal( this.courseName, that.courseName )
						&& Objects.equal( this.markables, that.markables );
			}
			return false;
		}

	}
	class Ma implements Markable{
		private final String name;

		private final String weight;

		private final String dueDate;

		public Ma(
				@JsonProperty( "name" ) final String name,
				@JsonProperty( "weight" ) final String weight,
				@JsonProperty( "dueDate" ) final String dueDate )
		{
			this.name = Preconditions.checkNotNull( name, "Precondition: name is NULL in MarkableImpl#MarkableImpl" );;
			this.weight = Preconditions.checkNotNull( weight, "Precondition: weight is NULL in MarkableImpl#MarkableImpl" );;
			this.dueDate = Preconditions.checkNotNull( dueDate, "Precondition: dueDate is NULL in MarkableImpl#MarkableImpl" );;


		}

		public String getMarkableName()
		{
			return name;
		}

		public String getWeight()
		{
			return weight;
		}

		public String getDueDate()
		{
			return dueDate;
		}

		@Override
		public int hashCode()
		{
			return Objects.hashCode( name, weight, dueDate );
		}

		@Override
		public boolean equals( final Object object )
		{
			if( object instanceof Ma)
			{
				final Ma that = (Ma)object;
				return Objects.equal( this.name, that.name )
						&& Objects.equal( this.weight, that.weight )
						&& Objects.equal( this.dueDate, that.dueDate );
			}
			return false;
		}
	}

}
