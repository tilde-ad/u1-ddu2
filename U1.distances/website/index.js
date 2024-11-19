// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

let whatCity = prompt("Vilken stad?");
const main = document.querySelector("main");
const title = document.querySelector("title");
const cityName = document.querySelector("h2");
const table = document.querySelector("#table");
const city = document.querySelector("#cities");
const info = document.querySelector("h3");
let foundCity = false;
let id;
let furthest = distances[0].distance;
let closest = distances[0].distance;

for (i = 0; i <= 38; i++) {
    let div = document.createElement("div");
    city.append(div);
    div.setAttribute("class", "cityBox")
    div.setAttribute("id", i);
    div.textContent = cities[i].name;
}

for (i = 0; i <= 38; i++) {
    if (whatCity == cities[i].name) {
        document.getElementById(i).style.backgroundColor = "black";
        document.getElementById(i).style.color = "white"
        cityName.textContent = cities[i].name + " " + "(" + cities[i].country + ")";
        foundCity = true;
        title.textContent = cities[i].name;
        id = i;

    }
}
for (const x of distances) {
    if (id === x.city1 || id === x.city2) {
        if (x.distance > furthest) {
            furthest = x.distance;
        }
        if (x.distance < closest) {
            closest = x.distance;
        }
    }
}
console.log(furthest, closest)
if (foundCity != true) {
    cityName.textContent = whatCity + " finns inte i databasen";
    info.textContent = "";
    title.textContent = "Not Found";
}

for (i = 0; i <= 38; i++) {
    let div = document.createElement("div");
    table.append(div);
    div.setAttribute("class", "head_column")
    div.setAttribute("class", "cell")
    div.textContent = cities[i].id + "-" + cities[i].name;

    for (j = 0; j <= 38; j++) {
        let div = document.createElement("div");
        table.append(div);
        div.setAttribute("class", "head_row")
        div.setAttribute("class", "cell")
        div.textContent = cities[i].id;
    }
}