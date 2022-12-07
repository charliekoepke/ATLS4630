import './App.css';
import React, {useState} from "react"
import Info from "./Info.js";
import Fish from "./Fish.js";
import aquarium from "./aquarium.jpg"
import butterflyfish from "./img/tropical/butterflyfish.png";
import clownfish from "./img/tropical/clownfish.png";
import lionfish from "./img/tropical/lionfish.png";
import parrotfish from "./img/tropical/parrotfish.png";
import mandarinfish from "./img/tropical/mandarinfish.png";
import triggerfish from "./img/tropical/triggerfish.png";
import wrasse from "./img/tropical/wrasse.png";
import angelfish from "./img/tropical/angelfish.png";
import catshark from "./img/tropical/catshark.png";
import kudaseahorse from "./img/tropical/kudaseahorse.png";
import seaturtle from "./img/tropical/seaturtle.png";

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleInfo = () => {
    setIsOpen(!isOpen);
  }

  function ShowFish(props) {
    return (<img src = {props.src} id = "butterflyfish" onClick = {toggleInfo}></img>)
  }

  // List of all fish
  const ListOfFish = [clownfish, lionfish, parrotfish, mandarinfish, triggerfish, wrasse, angelfish, catshark, kudaseahorse, seaturtle];

  // The fish that display on the screen, can be randomised
  let DisplayFish = [clownfish, lionfish, parrotfish, mandarinfish, triggerfish, wrasse, angelfish, catshark, kudaseahorse, seaturtle];

  return (
  <div style = {{backgroundImage: "url(/aquarium.jpg)", filter: "brightness(100%)"}} className="App">
    <Fish></Fish>
      {/* <img src = {butterflyfish} id = "butterflyfish" onClick = {toggleInfo}/> */}
      <img src = {DisplayFish[0]} id = {DisplayFish[0].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
      <img src = {DisplayFish[1]} id = {DisplayFish[1].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
      <img src = {DisplayFish[2]} id = {DisplayFish[2].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
      <img src = {DisplayFish[3]} id = {DisplayFish[3].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
      <img src = {DisplayFish[4]} id = {DisplayFish[4].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
      <img src = {DisplayFish[5]} id = {DisplayFish[5].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
      <img src = {DisplayFish[6]} id = {DisplayFish[6].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
      <img src = {DisplayFish[7]} id = {DisplayFish[7].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
      <img src = {DisplayFish[8]} id = {DisplayFish[8].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
      <img src = {DisplayFish[9]} id = {DisplayFish[9].toString()} onClick = {toggleInfo} height = "200" width = "200"/>

      {/* Adding button to randomise fish */}
      <button onClick={
        // Randomise function that takes in an array of fish, and outputs the fish in random order, pulling from ListOfFish
        function RandomFish() {
          for (let i = 0; i < DisplayFish.length; i++) {
            let NewFish = ListOfFish[Math.floor(Math.random() * ListOfFish.length)];
            // Changing the src
            document.getElementById(DisplayFish[i]).src = NewFish;
            // Changing the id
            document.getElementById(DisplayFish[i]).id = NewFish.toString();
            DisplayFish[i] = NewFish;
          }
        }
      }>Randomize</button>

      <button onClick= {
        // will display a fish food icon at a random place then have it disappear a few seconds later 
        function FeedFish() {
          
        }
      }></button>

      {isOpen && <Info
        handleClose={toggleInfo}
        content={<div className="info-text">
          <img className="info-image" src={aquarium} alt ="fish" width="200" height="200"></img>
          <h2>Fish 1</h2>
          <h2>Fish 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus nibh ante, vel elementum nibh gravida sed. Praesent dictum sed eros vestibulum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque consectetur vulputate urna, at dignissim nisi consectetur in. Phasellus sed ipsum ante. Sed in facilisis tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque sodales metus massa, nec pellentesque metus rutrum quis. In vestibulum suscipit ante eu ornare. Vivamus eu tortor ultrices, gravida lacus a, scelerisque leo. Praesent auctor lacinia dui, in bibendum dui egestas nec. Nulla a egestas magna.</p>
          </div>}
      />}
    </div>
  );
}

export default App;

// <button className="fish" onClick={toggleInfo}>Test Fish</button>
