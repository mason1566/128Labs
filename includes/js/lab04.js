/* ROOMS SECTION */
function createRoom(name, image, description, price, priceWriteup) {
    let room = {
        name: name,
        image: image,
        description: description,
        price: price,
        priceWriteup: priceWriteup
    }
    return room;
};

const rooms = [];

// creating 3 new rooms
rooms.push(createRoom("Standard", "/includes/images/motelRoom.jpg", "Quaint little room with a view!", "$35", "Your room is $35 per night (because of the murders)."));
rooms.push(createRoom("Upgraded", "/includes/images/niceRoom.jpg", "Cozy & picturesque", "$180", "Your room is $180 per night!"));
rooms.push(createRoom("Ultra", "/includes/images/outsideRoom.jpg", "Impractical", "$599.99", "Your room is $599.99 per night."));

let content = document.getElementById("content");

// looping over rooms and making a card for each
for (let i = 0; i < rooms.length; i++) {
    content.innerHTML += `
    <div class="card mx-4 mt-4" style="max-width: 800px;">
        <div class="d-flex flex-md-row flex-column">
        <div class="col-md-6 col-12">
            <img src="${rooms[i].image}" class="img-fluid rounded-start" style="object-fit: cover; max-height: 400px;">
        </div>
        <div class="col-md-6 col-12">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${rooms[i].name}</h5>
                <hr>
                <p class="card-text">${rooms[i].description}</p>
                <p class="card-text fw-bold fs-5">${rooms[i].price}</p>
                <button class="btn btn-primary align-self-end" id="${rooms[i].name}">Book Room</button>
            </div>
        </div>
        </div>
    </div>`;
}

// event listeners
document.getElementById("" + rooms[0].name).addEventListener("click", () => alert(rooms[0].priceWriteup))
document.getElementById("" + rooms[1].name).addEventListener("click", () => alert(rooms[1].priceWriteup))
document.getElementById("" + rooms[2].name).addEventListener("click", () => alert(rooms[2].priceWriteup))


/* TABLE SECTION */
let tableButton = document.getElementById("tableButton");
tableButton.addEventListener("click", addTable);
let table = document.getElementById("tabler");

let iteration = 2; // used for row number

function addTable() {
    table.innerHTML += `
    <tr>
        <td>Row(${iteration}, 1)</td>
        <td>Row(${iteration}, 2)</td>
    </tr>`;

    tableButton.scrollIntoView(); // click away
    iteration++;
}


