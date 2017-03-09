package objects;

public interface User {
	
	public enum UserType {STUDENT, INSTRUCTOR}
	
	public String getName();
	public String getUserName();
	public String getPassword();
	public String getEmail();
	public String getInstitution();
	
	public void setName(String name);
	public void setUserName(String userName);
	public void setPassword(String password);
	public void setEmail(String email);
	public void setInstitution(String institution);
	
}
