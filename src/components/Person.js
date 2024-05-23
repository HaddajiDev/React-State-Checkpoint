import React from 'react'

function Person(props) {
	if(props.shows){
		return (
			<div>	
				<img src={props.person.imgSrc} alt='img'/>
				<h1>Name : {props.person.full_Name}</h1>
				<h1>bio : {props.person.bio}</h1>
				<h1>job : {props.person.job}</h1>
			</div>
		);
	}	
}

export default Person