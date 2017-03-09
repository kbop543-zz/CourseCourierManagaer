package objects;

import java.util.ArrayList;
import java.util.List;

public class Student implements User{
	
	private List<Calendar> calendars = new ArrayList<Calendar>();
	
	private String name;
	private String userName;
	private String password;
	private String email;
	private String institution;
	
	public Student(
			String name,
			String userName,
			String password,
			String email,
			String institution) {
		
		this.name = name;
		this.userName = userName;
		this.password = password;
		this.email = email;
		this.institution = institution;
	}
	
	public Student(
			List<Calendar> calendars,
			String name,
			String userName,
			String password,
			String email,
			String institution) {
		
		this(name, userName, password, email, institution);
		
		this.calendars = calendars;
	}

	public String getName() {
		// TODO Auto-generated method stub
		return this.name;
	}

	public String getUserName() {
		// TODO Auto-generated method stub
		return this.userName;
	}

	public String getPassword() {
		// TODO Auto-generated method stub
		return this.password;
	}

	public String getEmail() {
		// TODO Auto-generated method stub
		return this.email;
	}

	public String getInstitution() {
		// TODO Auto-generated method stub
		return this.institution;
	}

	public void setName(String name) {
		// TODO Auto-generated method stub
		this.name = name;
	}

	public void setUserName(String userName) {
		// TODO Auto-generated method stub
		this.userName = userName;
	}

	public void setPassword(String password) {
		// TODO Auto-generated method stub
		this.password = password;
	}

	public void setEmail(String email) {
		// TODO Auto-generated method stub
		this.email = email;
	}

	public void setInstitution(String institution) {
		// TODO Auto-generated method stub
		this.institution = institution;
	}

}
