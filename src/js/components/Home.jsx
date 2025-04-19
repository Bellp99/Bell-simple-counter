import React from "react";
import SimpleCounter from "./SimpleCounter";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//Function calculateSecons


function calculateSeconds(aCounter, placeValue){
	return Math.floor(aCounter / placeValue)% 10;
}

//create your first component
const Home = (props) => {
	return (
		<>
		<SimpleCounter 
			thousandsDigit = {calculateSeconds(props.counter, 1000)}
			hundredsDigit = {calculateSeconds(props.counter, 100)}
			tensDigit = {calculateSeconds(props.counter, 10)}
			onesDigit = {calculateSeconds(props.counter, 1)}
		
		/>
		</>
	);
};

export default Home;