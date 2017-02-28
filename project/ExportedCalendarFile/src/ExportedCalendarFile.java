import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.Scanner;

public class ExportedCalendarFile {
	
	public String BuildEvent(
			String summary,
			String startTime,
			String startDate,
			String endTime,
			String endDate,
			String description,
			String location,
			String exTime,
			String exDate,
			String trigger,
			String repeat,
			String duration,
			String alarmDescription) {
		String header = new StringBuilder()
				.append(String.format("BEGIN:VCALENDAR\n"))
				.append(String.format("VERSION:2.0\n"))
				.append(String.format("CALSCALE:GREGORIAN\n"))
				.toString();
		summary = summary == null ? "CSC301H1 LEC5101" : summary;
		startTime = startTime == null ? "183000" : startTime;
		startDate = startDate == null ? "20170309" : startDate;
		String startDateAndTime = startDate + "T" + startTime;
		endTime = endTime == null ? "203000" : endTime;
		endDate = endDate == null ? "20170309" : endDate;
		String endDateAndTime = endDate + "T" + endTime;
		description = description == null ? 
				"Introduction to Software\\nBAHEN CENTRE FOR INFORMATION TECH" : 
					description;
		location = location == null ? "BA 1200" : location;
		exTime = exTime == null ? "180000" : exTime;
		exDate = exDate == null ? "20170220" : exDate;
		String exDateAndTime = exDate + "T" + exTime;
		trigger = trigger == null ? "-PT1H" : trigger;
		repeat = repeat == null ? "4" : repeat;
		duration = duration == null ? "PT15M" : duration;
		alarmDescription = alarmDescription == null ? 
				"Introduction to Software" : alarmDescription;
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
				.append(String.format("DURATION:%s\n", duration))
				.append(String.format("DESCRIPTION:%s\n", alarmDescription))
				.append(String.format("END:VALARM\n"))
				.append(String.format("END:VEVENT\n"))
				.append(String.format("END:VCALENDAR"))
				.toString();
		return header + event;
	}
	
	public static void main(String [ ] args) throws FileNotFoundException {
//		Initialize Variables
		String summary;
		String startTime;
		String startDate;
		String endTime;
		String endDate;
		String description;
		String location;
		String exTime;
		String exDate;
		String exDateAndTime;
		String trigger;
		String repeat;
		String duration;
		String alarmDescription;
		ExportedCalendarFile file = new ExportedCalendarFile();
//		Keybaord Input
		Scanner keyboard = new Scanner(System.in);
		System.out.println("Enter an event description: \n");
		summary = keyboard.nextLine();
		System.out.println("Enter an event start time in the format HHMMSS: \n");
		startTime = keyboard.nextLine();
		System.out.println("Enter an event start date in the format YYYYMMDD: \n");
		startDate = keyboard.nextLine();
		System.out.println("Enter an event end time in the format HHMMSS: \n");
		endTime = keyboard.nextLine();
		System.out.println("Enter an event end date in the format YYYYMMDD: \n");
		endDate = keyboard.nextLine();
		System.out.println("Enter an event description: \n");
		description = keyboard.nextLine();
		System.out.println("Enter an event location: \n");
		location = keyboard.nextLine();
		System.out.println("Enter an event exTime in the format HHMMSS: \n");
		exTime = keyboard.nextLine();
		System.out.println("Enter an event exDate in the format YYYYMMDD: \n");
		exDate = keyboard.nextLine();
		System.out.println("Enter an alarm trigger in the format -PT1H: \n");
		trigger = keyboard.nextLine();
		System.out.println("Enter a number of alarm repeats: \n");
		repeat = keyboard.nextLine();
		System.out.println("Enter the duration of each alarm in the format PT15M: \n");
		duration = keyboard.nextLine();
		System.out.println("Enter a description for the alarm: \n");
		alarmDescription = keyboard.nextLine();
		String eventToWrite = file.BuildEvent(
				summary,
				startTime,
				startDate,
				endTime,
				endDate,
				description,
				location,
				exTime,
				exDate,
				trigger,
				repeat,
				duration,
				alarmDescription);
//		File Output
		try(PrintWriter out = new PrintWriter("UserGeneratedCalendar.ics")) {
			out.println(eventToWrite);
		}
	}
}
