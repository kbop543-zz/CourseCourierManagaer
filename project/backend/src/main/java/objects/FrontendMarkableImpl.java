package objects;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Objects;
import com.google.common.base.Preconditions;

public class FrontendMarkableImpl implements FrontendMarkable
{
	private final String name;

	private final String weight;

	private final String dueDate;

	private final String description;


	public FrontendMarkableImpl(
			@JsonProperty( "name" ) final String name,
			@JsonProperty( "weight" ) final String weight,
			@JsonProperty( "dueDate" ) final String dueDate,
			@JsonProperty( "description" ) final String description )
	{
		this.name = Preconditions.checkNotNull( name, "Precondition: name is NULL in MarkableImpl#MarkableImpl" );;
		this.weight = Preconditions.checkNotNull( weight, "Precondition: weight is NULL in MarkableImpl#MarkableImpl" );;
		this.dueDate = Preconditions.checkNotNull( dueDate, "Precondition: dueDate is NULL in MarkableImpl#MarkableImpl" );;
		this.description = description;
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


	public String getDescription()
	{
		return description;
	}

	@Override
	public int hashCode()
	{
		return Objects.hashCode( name, weight, dueDate, description );
	}


	@Override
	public boolean equals( final Object object )
	{
		if( object instanceof FrontendMarkableImpl )
		{
			final FrontendMarkableImpl that = (FrontendMarkableImpl)object;
			return Objects.equal( this.name, that.name ) && Objects.equal( this.weight, that.weight ) && Objects.equal( this.dueDate, that.dueDate ) && Objects.equal(	this.description,
																																										that.description );
		}
		return false;
	}



}
