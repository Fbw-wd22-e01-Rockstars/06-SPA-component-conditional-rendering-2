import React from "react"
const Alert = props => {
	//add the condition inside this function
	if(props.show){
		return (
		<div className={`alert alert-primary`} role="alert">
			{props.text}
		</div>
	);
	}else{
		return null
	}

	
};

export default Alert;