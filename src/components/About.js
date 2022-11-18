import React from "react";

// function CheckBio(props){
//   if (props.bio != null){
//     return (
//       <p>{props.bio}</p>
//     )}
//     else {return null}
//   }


function About(props) {

  return (
    <div id="about">
      <h2>About Me</h2>
      {/* { CheckBio } */}
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
    </div>
  );
}

export default About;
