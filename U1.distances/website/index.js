function getDistance(cityId1, cityId2) {
    for (let space of distances) {
        if ((space.city1 === cityId1 && space.city2 === cityId2) ||
            (space.city1 === cityId2 && space.city2 === cityId1)) {
            return space.distance / 10;
        }
    }
}
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

let whatCity = prompt("Vilken stad?");

for (i = 0; i <= 38; i++) {
    let div = document.createElement("div");
    city.append(div);
    div.setAttribute("class", "cityBox");
    div.setAttribute("id", i);
    div.textContent = cities[i].name;
}

for (i = 0; i <= 38; i++) {
    if (whatCity == cities[i].name) {
        document.getElementById(i).classList.add("target");
        cityName.textContent = cities[i].name + " " + "(" + cities[i].country + ")";
        foundCity = true;
        title.textContent = cities[i].name;
        id = i;

    }
}

if (foundCity != true) {
    cityName.textContent = whatCity + " finns inte i databasen";
    info.textContent = "";
    title.textContent = "Not Found";
}

else {
    for (const sameid of distances) {
        if (id === sameid.city1 || id === sameid.city2) {
            if (sameid.distance > furthest) {
                furthest = sameid.distance;
                if (id === sameid.city1) {
                    furthestId = sameid.city2;
                }
                else {
                    furthestId = sameid.city1;
                }

            }
            if (sameid.distance < closest) {
                closest = sameid.distance;
                if (id === sameid.city1) {
                    closestId = sameid.city2;
                }
                else {
                    closestId = sameid.city1;
                }
            }
        }
        for (const findName of cities) {
            if (closestId == findName.id) {
                closestName = findName.name;
            }
            if (furthestId == findName.id) {
                furthestName = findName.name;
            }
        }
    }
    spanClosest.textContent = closestName;
    spanFurthest.textContent = furthestName;

    closest = closest / 10;
    furthest = furthest / 10;
    document.getElementById(closestId).textContent = closestName + " ligger " + closest + " mil bort "
    document.getElementById(closestId).classList.add("closest");
    document.getElementById(furthestId).textContent = furthestName + " ligger " + furthest + " mil bort "
    document.getElementById(furthestId).classList.add("furthest");
}

let divcreateFirstGrid = document.createElement("div");
table.appendChild(divcreateFirstGrid);
let emptyCol = document.createElement("div");
emptyCol.classList.add("cell");
emptyCol.textContent = " ";
emptyCol.style.height = "20px";
divcreateFirstGrid.append(emptyCol);

for (let city of cities) {
    let divcreate = document.createElement("div");
    table.appendChild(divcreate);
    divcreate.textContent = city.id;
    divcreate.classList.add("cell");
    divcreate.classList.add("head_row");

}
for (let i = 0; i < cities.length; i++) {
    let city = cities[i];
    let divcreate = document.createElement("div");
    table.appendChild(divcreate);
    divcreate.textContent = city.id + "-" + city.name;
    divcreate.classList.add("cell");
    divcreate.classList.add("head_column");

    if (i % 2 === 0) {
        divcreate.classList.add("even_row");
    }

    for (let j = 0; j < cities.length; j++) {
        if (i === j) {
            let divcreate = document.createElement("div");
            table.appendChild(divcreate);
            divcreate.classList.add("cell");
            if (i % 2 === 0) {
                divcreate.classList.add("even_row");
            }
            if (j % 2 === 0) {
                divcreate.classList.add("even_col");
            }
        } else {
            let distance = getDistance(cities[i].id, cities[j].id);
            let divcreate = document.createElement("div");
            table.appendChild(divcreate);
            divcreate.textContent = distance;
            divcreate.classList.add("cell");
            if (i % 2 === 0) {
                divcreate.classList.add("even_row");
            }
            if (j % 2 === 0) {
                divcreate.classList.add("even_col");
            }
        }
    }
}