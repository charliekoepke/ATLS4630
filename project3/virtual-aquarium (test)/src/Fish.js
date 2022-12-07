import React from 'react';
import anime from 'animejs';
import Info from "./Info.js";
import butterflyfish from './img/tropical/butterflyfish.png';

let anim = anime({
  targets: 'img',
  keyframes: [
    {translateY: -5, rotate: 4},
    {translateY: 5, rotate: -4},
    // {translateZ: 4},
    // {translateZ: -4}
  ],
  duration: 1000,
  autoplay: true,
  //direction: 'alternate',
  loop: true,
  //easing: 'easeInCirc',
});

const Fish = props => {
//   return (
//       <img src={butterflyfish} id="fish1" alt="Butterfly Fish" onClick={Info.toggleInfo} id="butterflyfish" width='200' height='200'/>
// );
}

export default Fish;
