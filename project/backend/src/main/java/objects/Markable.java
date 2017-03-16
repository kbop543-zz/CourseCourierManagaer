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

}