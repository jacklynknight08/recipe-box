import React from 'react';


// Passing down App component to the Recipe component through the props
const Recipe = ({title, calories, image}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""></img>
        </div>
    );
}

export default Recipe;