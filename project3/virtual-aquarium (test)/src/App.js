import './App.css';
import React, {startTransition, useState} from "react"
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

let fishnum;

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleInfo = () => {
    setIsOpen(!isOpen);
  }

  function ShowFish(props) {
    return (<img src = {props.src} id = {props.id} className="fish" onClick = {toggleInfo} ></img>)
  }

  function FishInfo(props) {
    return (
    <div>
      <img src = {props.src} className = "fish"></img>
      <h1>{props.name}</h1>
      <p>{props.info}</p>
      </div>
    )
  }

  function clickClownfish(){
    fishnum = 0;
    toggleInfo()
    console.log(fishnum);
  }

  function clickLionfish(){
    fishnum = 1;
    toggleInfo()
    console.log(fishnum);
  }

  function clickParrotfish(){
    fishnum = 2;
    toggleInfo()
    console.log(fishnum);
  }

  function clickMandarinfish(){
    fishnum = 3;
    toggleInfo()
    console.log(fishnum);
  }

  function clickTriggerfish(){
    fishnum = 4;
    toggleInfo()
    console.log(fishnum);
  }

  function clickWrasse(){
    fishnum = 5;
    toggleInfo()
    console.log(fishnum);
  }

  function clickAngelfish(){
    fishnum = 6;
    toggleInfo()
    console.log(fishnum);
  }

  function clickCatshark(){
    fishnum = 7;
    toggleInfo()
    console.log(fishnum);
  }

  function clickKudaseahorse(){
    fishnum = 8;
    toggleInfo()
    console.log(fishnum);
  }

  function clickSeaturtle(){
    fishnum = 9;
    toggleInfo()
    console.log(fishnum);
  }

  function clickButterflyfish(){
    fishnum = 10;
    toggleInfo()
    console.log(fishnum);
  }

  // List of all fish
  const ListOfFish = [clownfish, lionfish, parrotfish, mandarinfish, triggerfish, wrasse, angelfish, catshark, kudaseahorse, seaturtle, butterflyfish];

  // names of all fish in string
  const NamesOfFish = ["Clownfish", "Lionfish", "Parrotfish", "Mandarinfish", "Triggerfish", "Wrasse", "Angelfish", "Catshark", "Kuda Seahorse", "Sea Turtle", "Butterflyfish"];

// information of all fish
const FishInformation = [
  "Clownfish or anemonefish are fishes from the subfamily Amphiprioninae in the family Pomacentridae. Thirty species of clownfish are recognized: one in the genus Premnas, while the remaining are in the genus Amphiprion. In the wild, they all form symbiotic mutualisms with sea anemones. Depending on the species, anemonefish are overall yellow, orange, or a reddish or blackish color, and many show white bars or patches. The largest can reach a length of 17 cm (6+1⁄2 in), while the smallest barely achieve 7–8 cm (2+3⁄4–3+1⁄4 in).",
  "Pterois is a genus of venomous marine fish, commonly known as lionfish, native to the Indo-Pacific. Also called firefish, turkeyfish, tastyfish, or butterfly-cod, it is characterized by conspicuous warning coloration with red, white, creamy, or black bands, showy pectoral fins, and venomous, spiky fin rays. Pterois radiata, Pterois volitans, and Pterois miles are the most commonly studied species in the genus. Pterois species are popular aquarium fish. P. volitans and P. miles are recent and significant invasive species in the west Atlantic, Caribbean Sea and Mediterranean Sea.",
  "Parrotfishes are a group of about 90 fish species regarded as a family (Scaridae), or a subfamily (Scarinae) of the wrasses. With about 95 species, this group's largest species richness is in the Indo-Pacific. They are found in coral reefs, rocky coasts, and seagrass beds, and can play a significant role in bioerosion.",
  "Synchiropus splendidus, the mandarinfish or mandarin dragonet, is a small, brightly colored member of the dragonet family, which is popular in the saltwater aquarium trade. The mandarinfish is native to the Pacific, ranging approximately from the Ryukyu Islands south to Australia. It can usually be found in some of the warmer waters.",
  "Triggerfish are about 40 species of often brightly colored fish of the family Balistidae. Often marked by lines and spots, they inhabit tropical and subtropical oceans throughout the world, with the greatest species richness in the Indo-Pacific. Most are found in relatively shallow, coastal habitats, especially at coral reefs, but a few, such as the oceanic triggerfish (Canthidermis maculata), are pelagic. While several species from this family are popular in the marine aquarium trade, they are often notoriously ill-tempered.",
  "The wrasses are a family, Labridae, of marine fish, many of which are brightly colored. The family is large and diverse, with over 600 species in 81 genera, which are divided into 9 subgroups or tribes. They are typically small, most of them less than 20 cm (7.9 in) long, although the largest, the humphead wrasse, can measure up to 2.5 m (8.2 ft). They are efficient carnivores, feeding on a wide range of small invertebrates. Many smaller wrasses follow the feeding trails of larger fish, picking up invertebrates disturbed by their passing. Juveniles of some representatives of the genera Bodianus, Epibulus, Cirrhilabrus, Oxycheilinus, and Paracheilinus hide among the tentacles of the free-living mushroom corals & Heliofungia actiniformis. The word wrasse comes from the Cornish word wragh, a lenited form of gwragh, meaning an old woman or hag, via Cornish dialect wrath. It is related to the Welsh gwrach and Breton gwrach.",
  "Pterophyllum is a small genus of freshwater fish from the family Cichlidae known to most aquarists as angelfish. All Pterophyllum species originate from the Amazon Basin, Orinoco Basin and various rivers in the Guiana Shield in tropical South America. The three species of Pterophyllum are unusually shaped for cichlids being greatly laterally compressed, with round bodies and elongated triangular dorsal and anal fins. This body shape allows them to hide among roots and plants, often on a vertical surface. Naturally occurring angelfish are frequently striped transversely, colouration which provides additional camouflage. Angelfish are ambush predators and prey on small fish and macroinvertebrates. All Pterophyllum species form monogamous pairs. Eggs are generally laid on a submerged log or a flattened leaf. As is the case for other cichlids, brood care is highly developed.",
  "The small-spotted catshark (Scyliorhinus canicula), also known as the sandy dogfish, lesser-spotted dogfish, rough-hound or morgay (in Scotland and Cornwall), is a catshark of the family Scyliorhinidae. It is found on the continental shelves and the uppermost continental slopes off the coasts of Norway and the British Isles south to Senegal and in the Mediterranean, between latitudes 63° N and 12° N. It can grow up to a length of 1 m (3 ft 3 in), and it can weigh more than 2 kg (4.4 lb). It is found primarily over sandy, gravelly, or muddy bottoms from depths of a few metres down to 400 m. S. canicula is one of the most abundant elasmobranchs in the northeast Atlantic and Mediterranean Sea. The majority of the populations are stable in most areas.",
  "Hippocampus kuda is a species of seahorse, also known as the common seahorse, estuary seahorse, yellow seahorse or spotted seahorse. The common name sea pony has been used for this species under its synonym Hippocampus fuscus.The yellow seahorse is a small fish that can reach a length of 17–30 cm. The body is quite large, elongated, and has no spines, all bumps are rounded. The head is relatively large compared to the body. The snout is short and thick. The coronet is small and rises towards the rear, it can also sometimes have more or less long filaments. Some adults have a black line running through the dorsal fin in the direction of its width. The body coloration is often dark with a grainy texture but can also be yellow, cream, or reddish blotches and numerous small dark spots. The seahorse possesses a tail that is used as a bending and grasping appendage. The seahorse is able to bend its tail ventrally due to its possession of body plates. The hypoxia muscle is responsible for bending the seahorse's tail. The plates send forces to the hypoxia muscles to ensure bending of the tail. These functions of the musculoskeletal system allow us to understand the anatomy of seahorses in further depth.",
  "Sea turtles (superfamily Chelonioidea), sometimes called marine turtles, are reptiles of the order Testudines and of the suborder Cryptodira. The seven existing species of sea turtles are the flatback, green, hawksbill, leatherback, loggerhead, Kemp's ridley, and olive ridley sea turtles. All six of the sea turtle species present in US waters (all of those listed above except the flatback) are listed as endangered and/or threatened under the Endangered Species Act. The seventh sea turtle species is the flatback, which exists in the waters of Australia, Papua New Guinea and Indonesia. Sea turtles can be separated into the categories of hard-shelled (cheloniid) and leathery-shelled (dermochelyid). There is only one dermochelyid species which is the leatherback sea turtle.",
  "The butterflyfish are a group of conspicuous tropical marine fish of the family Chaetodontidae; the bannerfish and coralfish are also included in this group. The approximately 129 species in 12 genera are found mostly on the reefs of the Atlantic, Indian, and Pacific Oceans. A number of species pairs occur in the Indian and Pacific Oceans, members of the huge genus Chaetodon. Butterflyfish look like smaller versions of angelfish (Pomacanthidae), but unlike these, lack preopercle spines at the gill covers. Some members of the genus Heniochus resemble the Moorish idol (Zanclus cornutus) of the monotypic Zanclidae. Among the paraphyletic Perciformes, the former are probably not too distantly related to butterflyfish, whereas the Zanclidae seem far less close."
  ]

  // link to info for all fish
  const FishLink = [
    "https://en.wikipedia.org/wiki/Clownfish",
    "https://en.wikipedia.org/wiki/Pterois",
    "https://en.wikipedia.org/wiki/Parrotfish",
    "https://en.wikipedia.org/wiki/Synchiropus_splendidus",
    "https://en.wikipedia.org/wiki/Triggerfish",
    "https://en.wikipedia.org/wiki/Wrasse",
    "https://en.wikipedia.org/wiki/Pterophyllum",
    "https://en.wikipedia.org/wiki/Small-spotted_catshark",
    "https://en.wikipedia.org/wiki/Hippocampus_kuda",
    "https://en.wikipedia.org/wiki/Sea_turtle",
    "https://en.wikipedia.org/wiki/Butterflyfish"
  ]

  // The fish that display on the screen, can be randomised
  let DisplayFish = [clownfish, lionfish, parrotfish, mandarinfish, triggerfish, wrasse, angelfish, catshark, kudaseahorse, seaturtle, butterflyfish];


    // <img src = {clownfish} id = "clownfish" onClick = {clickClownfish}/>
    // <img src = {lionfish} id = "lionfish" onClick = {clickLionfish}/>
    // <img src = {parrotfish} id = "parrotfish" onClick = {clickParrotfish}/>
    // <img src = {mandarinfish} id = "mandarinfish" onClick = {clickMandarinfish}/>
    // <img src = {triggerfish} id = "triggerfish" onClick = {clickTriggerfish}/>
    // <img src = {wrasse} id = "wrasse" onClick = {clickWrasse}/>
    // <img src = {angelfish} id = "angelfish" onClick = {clickAngelfish}/>
    // <img src = {catshark} id = "catshark" onClick = {clickCatshark}/>
    // <img src = {kudaseahorse} id = "kudaseahorse" onClick = {clickKudaseahorse}/>
    // <img src = {seaturtle} id = "seaturtle" onClick = {clickSeaturtle}/>
    // <img src = {butterflyfish} id = "butterflyfish" onClick = {clickButterflyfish}/>

    // <Fish></Fish>
    //
    // {isOpen && <Info
    //   handleClose={toggleInfo}
    //   content={<div className="info-text">
    //     <FishInfo
    //     src = {DisplayFish[fishnum]} name = {NamesOfFish[fishnum]} info = {FishInformation[fishnum]}>
    //     </FishInfo>
    //     </div>}
    // />}

    

  return (
  <div className="App" id="App">

      <h2>Web Aquarium</h2>
      <p onClick = {function StartAquarium() {
        // getting rid of text on screen and displaying the fish
        document.querySelector(".App > h2").style.display = "none";
        document.querySelector(".App > p").style.display = "none";
        // document.querySelector(".App > img").style.display = "block";
        // displaying all fish
        for (let i = 0; i < ListOfFish.length; i++) {
          document.querySelectorAll(".App > img")[i].style.display = "block";
        }
      }}>Click to Enter</p>

    <img src = {clownfish} id = "clownfish" onClick = {clickClownfish}/>
    <img src = {lionfish} id = "lionfish" onClick = {clickLionfish}/>
    <img src = {parrotfish} id = "parrotfish" onClick = {clickParrotfish}/>
    <img src = {mandarinfish} id = "mandarinfish" onClick = {clickMandarinfish}/>
    <img src = {triggerfish} id = "triggerfish" onClick = {clickTriggerfish}/>
    <img src = {wrasse} id = "wrasse" onClick = {clickWrasse}/>
    <img src = {angelfish} id = "angelfish" onClick = {clickAngelfish}/>
    <img src = {catshark} id = "catshark" onClick = {clickCatshark}/>
    <img src = {kudaseahorse} id = "kudaseahorse" onClick = {clickKudaseahorse}/>
    <img src = {seaturtle} id = "seaturtle" onClick = {clickSeaturtle}/>
    <img src = {butterflyfish} id = "butterflyfish" onClick = {clickButterflyfish}/>

    <Fish></Fish>

    {isOpen && <Info
        handleClose={toggleInfo}
        content={<div className="info-text">
          <FishInfo
          src = {DisplayFish[fishnum]} name = {NamesOfFish[fishnum]} info = {FishInformation[fishnum]}>
          </FishInfo>
          </div>}
      />}
      

      {/* <ShowFish src={DisplayFish[0]} id = "clownfish"/> */}
      {/* <ShowFish src={DisplayFish[1]} id = "lionfish"/> */}
    </div>
  );
}

export default App;

// <button className="fish" onClick={toggleInfo}>Test Fish</button>

// {/* <img src = {butterflyfish} id = "butterflyfish" onClick = {toggleInfo}/> */}
// <img src = {DisplayFish[0]} id = {DisplayFish[0].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[1]} id = {DisplayFish[1].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[2]} id = {DisplayFish[2].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[3]} id = {DisplayFish[3].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[4]} id = {DisplayFish[4].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[5]} id = {DisplayFish[5].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[6]} id = {DisplayFish[6].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[7]} id = {DisplayFish[7].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[8]} id = {DisplayFish[8].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
// <img src = {DisplayFish[9]} id = {DisplayFish[9].toString()} onClick = {toggleInfo} height = "200" width = "200"/>
//
// {/* Adding button to randomise fish */}
// <button onClick={
//   // Randomise function that takes in an array of fish, and outputs the fish in random order, pulling from ListOfFish
//   function RandomFish() {
//     for (let i = 0; i < DisplayFish.length; i++) {
//       let NewFish = ListOfFish[Math.floor(Math.random() * ListOfFish.length)];
//       // Changing the src
//       document.getElementById(DisplayFish[i]).src = NewFish;
//       // Changing the id
//       document.getElementById(DisplayFish[i]).id = NewFish.toString();
//       DisplayFish[i] = NewFish;
//     }
//   }
// }>Randomize</button>
