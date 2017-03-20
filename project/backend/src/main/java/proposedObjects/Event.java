package proposedObjects;

import java.sql.Date;
import java.sql.Time;

public interface Event
{
	public enum EventType
	{
		ASSIGNMENT,
		MIDTERM,
		EXAM
	}

	public Time getStartTime();

	public Time getEndTime();

	public int getDuration();

	public String getLocation();

	public Date getAnnouncedDate();

	public Date getDueDate();

	public int getWeight();

	public Time setStartTime();

	public Time setEndTime();

	public int setDuration();

	public String setLocation();

	public Date setAnnouncedDate();

	public Date setDueDate();

	public int setWeight();


}
