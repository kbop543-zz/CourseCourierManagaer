package algorithms;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ExportedCalendarFile {
	private String jsonData;
	private List<ArrayList<String>> events = new ArrayList<ArrayList<String>>();
	
	public String jsonTimeStampToEventTimeStamp(String jsonTimeStamp) {
		String eventTimeStamp = jsonTimeStamp.replace("-", "");
		eventTimeStamp = eventTimeStamp.replace(":", "");
		eventTimeStamp = eventTimeStamp.replace("Z", "");
		return eventTimeStamp;
	}
	
//	Acts as a header and a footer to the BuildEvent call
	public String BuildEvents() {
		//Header
		String calendarFileString = new StringBuilder()
				.append(String.format("BEGIN:VCALENDAR\n"))
				.append(String.format("VERSION:2.0\n"))
				.append(String.format("CALSCALE:GREGORIAN\n"))
				.toString();
		String footer = "END:VCALENDAR";
		
		//Add Events
		for(int i = 0; i < events.size(); ++i) {
			String summary = events.get(i).get(0);
			String description = events.get(i).get(1);
			String startDateAndTime = jsonTimeStampToEventTimeStamp(events.get(i).get(2));
			calendarFileString = calendarFileString + (BuildEvent(summary, startDateAndTime, description));
		}
		return calendarFileString + footer;
	}
	
	
	public String BuildEvent(
			String summary,
			String startDateAndTime,	
			String description) {
		String hour = startDateAndTime.substring(9, 11);
		int duration = 1;
		int hourInt = Integer.parseInt(hour);
		int newHourInt = hourInt + duration;
		String newHourString = Integer.toString(newHourInt);
		String endDateAndTime = startDateAndTime.substring(0, 9) + newHourString + 
				startDateAndTime.substring(11, startDateAndTime.length());
//		String location = location == null ? "BA 1200" : location;
		String location = "";
		String exDateAndTime = startDateAndTime;
		String trigger = "-PT1H";
		String repeat = "4";
		String alarmDuration = "PT15M";
		String alarmDescription = summary;
		String event = new StringBuilder()
				.append(String.format("BEGIN:VEVENT\n"))
				.append(String.format("SUMMARY:%s\n", summary))
				.append(String.format("DTSTART;TZID=America/Toronto:%s\n", startDateAndTime))
				.append(String.format("DTEND;TZID=America/Toronto:%s\n", endDateAndTime))
				.append(String.format("DESCRIPTION:%s\n", description))
				.append(String.format("LOCATION:%s\n", location))
				.append(String.format("EXDATE;TZID=America/Toronto:%s\n", exDateAndTime))
				.append(String.format("BEGIN:VALARM\n"))
				.append(String.format("TRIGGER:%s\n", trigger))
				.append(String.format("REPEAT:%s\n", repeat))
				.append(String.format("DURATION:%s\n", alarmDuration))
				.append(String.format("DESCRIPTION:%s\n", alarmDescription))
				.append(String.format("END:VALARM\n"))
				.append(String.format("END:VEVENT\n"))
				.toString();
		return event;
	}
	
	public void readLinesInFile() throws IOException {
		String filePath = "/Users/johnaxon/Documents/UofT/Winter 2017/"
				+ "project-team-11/project/backend/src/main/resources/hypotheticalOutput.json";
		jsonData = new String(Files.readAllBytes(Paths.get(filePath)), StandardCharsets.UTF_8); 
    }
	
	public void parseJson() {
		Pattern p = Pattern.compile("\"courseCode\":\"(\\w+)\"");
		Matcher m = p.matcher(jsonData);
		m.find();
		System.out.println("Course " + m.group(1) + ".");
		String courseCode = m.group(1);

//		Get Event Names
		p = Pattern.compile("\"name\":\\s*\"(\\w+)\"");
		m = p.matcher(jsonData);
		while (m.find()) {
			System.out.println("Name " + m.group(1) + ".");
			ArrayList<String> innerList = new ArrayList<String>();
			innerList.add(courseCode + " " + m.group(1));
			events.add(innerList);
		}
		
//		Get Event Weights
		p = Pattern.compile("\"weight\":\\s*\"(\\w+%)\"");
		m = p.matcher(jsonData);
		int index = 0;
		while (m.find()) {
			System.out.println("Weight " + m.group(1) + ".");
			ArrayList<String> innerList = events.get(index);
			innerList.add(m.group(1));
			++index;
		}
		
//		Get Event Due Dates
		p = Pattern.compile("\"dueDate\":\\s*\"(\\d+-\\d+-\\d+T\\d+:\\d+:\\d+Z)\"");
		m = p.matcher(jsonData);
		index = 0;
		while (m.find()) {
			System.out.println("Due Dates " + m.group(1) + ".");
			ArrayList<String> innerList = events.get(index);
			innerList.add(m.group(1));
			++index;
		}
    }
	
	public static void main(String [ ] args) throws FileNotFoundException, IOException {
		ExportedCalendarFile file = new ExportedCalendarFile();
		file.readLinesInFile();
		file.parseJson();
		String eventsToWrite = file.BuildEvents();
//		File Output
		try(PrintWriter out = new PrintWriter("TuesdayTest.ics")) {
			out.println(eventsToWrite);
		}
	}
}
