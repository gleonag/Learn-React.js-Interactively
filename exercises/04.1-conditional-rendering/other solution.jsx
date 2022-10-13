if (props.color === "red") return (<div class="alert alert-danger" role="alert">
{props.text}
  </div>)
else if ( props.color === "orange") return (<div class="alert alert-warning" role="alert">
										{props.text}
					  </div>)
else return null;