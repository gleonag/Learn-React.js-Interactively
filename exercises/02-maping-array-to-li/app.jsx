import React, { useDebugValue } from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

/**
 * change the content inside the map function
 **/

const animalsInHTML = animals.map((singleAnimal, i) => {
	return <li key={singleAnimal.toString(i)}>{singleAnimal}</li>;
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
