// API Source: https://acnhapi.com/

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
let flowers = ["Cosmos", "Lily", "Rose", "Pansy", "Windflower", "Hyacinth", "Mum", "Tulip"];
document.getElementById("flower").innerHTML = "<p>Starting Flower: " + flowers[getRandomInt(8) - 1] + "</p>";

// Choosing island fruit
let fruit = ["Apple", "Orange", "Cherry", "Pear", "Peach"];
document.getElementById("fruit").innerHTML = "<p>Starting Fruit: " + fruit[getRandomInt(5) - 1] + "</p>";