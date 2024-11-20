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
const spanClosest = document.getElementById("closest");
const spanFurthest = document.getElementById("furthest");
let foundCity = false;
let id;
let furthest = distances[0].distance;
let closest = distances[0].distance;
let furthestId;
let closestId;
let furthestName;
let closestName;

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
            if (id === x.city1) {
                furthestId = x.city2;
            }
            else {
                furthestId = x.city1;
            }

        }
        if (x.distance < closest) {
            closest = x.distance;
            if (id === x.city1) {
                closestId = x.city2;
            }
            else {
                closestId = x.city1;
            }
        }
    }
}
console.log(furthestId, closestId);

if (foundCity != true) {
    cityName.textContent = whatCity + " finns inte i databasen";
    info.textContent = "";
    title.textContent = "Not Found";
}

else {
    for (const x of distances) {
        if (id === x.city1 || id === x.city2) {
            if (x.distance > furthest) {
                furthest = x.distance;
                if (id === x.city1) {
                    furthestId = x.city2;
                }
                else {
                    furthestId = x.city1;
                }

            }
            if (x.distance < closest) {
                closest = x.distance;
                if (id === x.city1) {
                    closestId = x.city2;
                }
                else {
                    closestId = x.city1;
                }
            }
        }
        for (const x of cities) {
            if (closestId == x.id) {
                closestName = x.name;
            }
            if (furthestId == x.id) {
                furthestName = x.name;
            }
        }
    }
    spanClosest.textContent = closestName;
    spanFurthest.textContent = furthestName;
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