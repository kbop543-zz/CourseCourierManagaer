package backend;
import java.io.File;
import java.io.IOException;
import java.util.List;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Objects;
import com.google.common.base.Preconditions;
import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import objects.Calendar;
import objects.Course;
import objects.CourseImpl;

public class toJSON2 {
	List<Course> kewl;

	public toJSON2(List<Course> kewl){
		this.kewl =kewl;
	}
	
	public void run(){
		ObjectMapper om = new ObjectMapper();
		try {
			om.writeValue(new File("sample.json"),kewl);
			System.out.println(om.writeValueAsString(kewl));
		} catch (JsonGenerationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
