// API Source: https://acnhapi.com/

// Enter name
let name = prompt("Please enter your name: ");

document.getElementById("nameisland").innerHTML = `${name}` + "'s Island";

// Random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

// Getting random villagers
for (let i = 0; i < 10; i++) {
    let url = 'https://acnhapi.com/v1/villagers/' + getRandomInt(391).toString();
    fetch(url)
    .then(response => response.json())
    .then(json => {
        // Image
        document.getElementById(i.toString()).innerHTML = "<img src='" + json.image_uri + "'>";
        // Name
        document.getElementById(i.toString()).innerHTML += "<p>" + json.name["name-USen"] + "</p>";
        // Personality
        document.getElementById(i.toString()).innerHTML += "<p>Personality: " + json.personality + "</p>";
        // Birthday
        document.getElementById(i.toString()).innerHTML += "<p>Birthday: " + json["birthday-string"] + "</p>";
    })
    .catch(err => console.log('Request Failed', err));
}

// Choosing island flower
// https://acnh.co/flower-images
let flower = ["Cosmos", "Lily", "Rose", "Pansy", "Windflower", "Hyacinth", "Mum", "Tulip"];
let flowerImg = ["cosmos.png", "lily.png", "rose.png", "pansy.png", "windflower.png", "hyacinth.png", "mum.png", "tulip.png"];
let randomFlower = getRandomInt(8) - 1;
document.getElementById("flower").innerHTML = "<img src=img/" +  flowerImg[randomFlower] + "><p>Starting Flower: " + flower[randomFlower] + "</p>";

// Choosing island fruit
// https://isanimalcrossingswitchoutyet.tumblr.com/post/189787498601/new-fruit-renders-for-new-horizons-click-for-high
let fruit = ["Apple", "Orange", "Cherry", "Pear", "Peach"];
let fruitImg = ["apple.png", "orange.png", "cherry.png", "pear.png", "peach.png"];
let randomFruit = getRandomInt(5) - 1;
document.getElementById("fruit").innerHTML = "<img src=img/" + fruitImg[randomFruit] + "><p>Starting Fruit: " + fruit[randomFruit] + "</p>";
