package objects;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.base.Objects;
import com.google.common.base.Preconditions;

public class MarkableImpl implements Markable
{
	private final String name;

	private final String weight;

	private final String dueDate;

	public MarkableImpl(
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
		if( object instanceof MarkableImpl )
		{
			final MarkableImpl that = (MarkableImpl)object;
			return Objects.equal( this.name, that.name ) && Objects.equal( this.weight, that.weight ) && Objects.equal( this.dueDate, that.dueDate );
		}
		return false;
	}

}
