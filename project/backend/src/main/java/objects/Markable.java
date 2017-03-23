package objects;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize( as = MarkableImpl.class )
public interface Markable
{

	/**
	 * Gets the name of the markable
	 * @return the name of the markable
	 */
	@JsonProperty( "name" )
	public String getMarkableName();

	/**
	 * Gets weight of the markable
	 * @return the weight of the markable
	 */
	@JsonProperty( "weight" )
	public String getWeight();

	/**
	 * Gets the due date of the markable
	 * @return the due date of the markable
	 */
	@JsonProperty( "dueDate" )
	public String getDueDate();
	
	/**
	 * Gets the location of the markable
	 * @return the location of the markable
	 */
	@JsonProperty( "location" )
	public String getLocation();
	
	/**
	 * Gets the end date of the markable
	 * @return the end date of the markable
	 */
	@JsonProperty( "endDate" )
	public String getEndDate();
}
