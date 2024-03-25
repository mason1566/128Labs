class Hotel {
    /* PRIVATE FIELDS */
    #name; // hotel name (string)
    #city; // hotel location (string)
    #rooms; // total room amount (number)
    #booked; // booked room amount (number)
    #gym; // does it have a gym? (boolean)

    #roomTypes = []; // (array of strings)
    #airportShuttle = false; // does the hotel have a shuttle? (boolean)
    #restaurants = []; // An array of key-value pairs with restaurant name (key) and restaurant type (value) | (map)
    #swimmingPool = false; // does it have a swimming pool? (boolean)
    
    constructor(name, city, rooms, booked, gym) {
        this.#name = name;
        this.#city = city;
        this.#rooms = rooms;
        this.#booked = booked;
        this.#gym = gym;
    }

    /* METHODS */
    get name() {
        return this.#name;
    }

    set name(nameVal) {
        this.#name = nameVal;
    }

    get city() {
        return this.#city;
    }

    set city(cityVal) {
        this.#city = cityVal;
    }

    get rooms() {
        return this.#rooms;
    } 

    set rooms(roomsVal) {
        this.#rooms = roomsVal;
    }

    get booked() {
        return this.#booked;
    }

    set booked(bookedVal) {
        this.#booked = bookedVal;
    }

    get gym() {
        return this.#gym;
    }

    set gym(gymVal) {
        this.#gym = gymVal;
    }

    get airportShuttle() {
        return this.#airportShuttle;
    }

    set airportShuttle(hasShuttle) {
        this.#airportShuttle = hasShuttle;
    }

    get swimmingPool() {
        return this.#swimmingPool;
    }

    set swimmingPool(hasPool) {
        this.#swimmingPool = hasPool;
    }

    get restaurantsWriteup() {
        if (this.#restaurants.length == 0) {
            return `<p class="fw-bold">The Hotel has no restaurants.</p>`;
        } else if (this.#restaurants.length == 1) {
            return `<p class="fw-bold">The Hotel has 1 restaurant:</p>
                    <p class="fw-bold ms-3">${this.#restaurants[0][0]} | ${this.#restaurants[0][1]}</p>`;
        } else {
            let str = `<p class="fw-bold">The Hotel has ${this.#restaurants.length} restaurants:</p>`
            for (let i = 0; i < this.#restaurants.length; i++) {
                str += `<p class="fw-bold ms-3">${i+1}. ${this.#restaurants[i][0]} | ${this.#restaurants[i][1]}</p>`;
            }
            return str;
        }
    }

    get roomsBookedWriteup() {
        if (this.#booked == this.#rooms) {
            return `<h4 class="fw-bold text-center" style="color: red;">There are ${this.#booked}/${this.#rooms} rooms booked.</h4>`;
        }
        return `<h4 class="fw-bold text-center" style="color: green;">There are ${this.#booked}/${this.#rooms} rooms booked.</h4>`;
    }

    getHotelInfo() {
        console.log(`Name: ` + this.name);
        console.log(`Location: ` + this.city);
    }

    getRoomInfo() {
        console.log(`${this.#booked}/${this.#rooms} rooms available.`);
    }

    addRoomType(roomType) {
        if (typeof(roomType) == "string" && !this.#roomTypes.includes(roomType)) {
            this.#roomTypes.push(roomType);
            this.getRoomTypes();
        } else {
            console.log("Invalid room type. No room type added.")
        }

    }

    getRoomTypes() {
        if (this.#roomTypes.length < 1) return "No room types available";
        let str = this.#roomTypes[0];
        for (let i = 1; i < this.#roomTypes.length; i++) {
            str += `, ${this.#roomTypes[i]}`;
        }
        return str;
    }

    bookRoom() {
        if (this.#booked < this.#rooms) this.#booked++;
    }

    cancelRoom() {
        if (this.#booked > 0) this.#booked--;
    }

    getRestaurants() {
        if (this.#restaurants.length < 1) console.log("No restaurants.");
        else {
            for (const [key, value] of this.#restaurants) {
                console.log(`Name: ${key} | Type: ${value}`);
            }
        }
    }

    addRestaurant(name, type) {
        this.#restaurants.push([name, type]);
    }
}

class Resort extends Hotel {
    #resortType = ""; // What type of resort? (singles, family,...) (string)
    #beachFront = false; // is it on the beach? (boolean)
    #kidsClub = false; // does it have a kids club? (boolean)
    #bar = false; // Does it have a bar? (bool)

    set resortType(resortTypeVal) {
        this.#resortType = resortTypeVal;
    }

    get resortType() {
        return this.#resortType;
    }

    set beachFront(hasBeachFront) {
        this.#beachFront = hasBeachFront;
    }

    get beachFront() {
        return this.#beachFront;
    }

    set kidsClub(hasKidsClub) {
        this.#kidsClub = hasKidsClub;
    }

    get kidsClub() {
        return this.#kidsClub;
    }
    
    set bar(hasBar) {
        this.#bar = hasBar;
    }

    get bar() {
        return this.#bar;
    }
}


/* Interacting with DOM */
const mainContent = document.getElementById("mainContent");
let hotelBookRoom;
let hotelCancelRoom;
let hotelRoomsBookedWriteup;

let sisterResortButton;

let resortBookRoom;
let resortCancelRoom;
let resortRoomsBookedWriteup;

function setHotelButtonEventHandlers() {
    hotelBookRoom = document.getElementById("hotelBookRoom").addEventListener('click', () => {
        hotel.bookRoom();
        updateHotelRoomsBookedWriteup();
    });
    hotelCancelRoom = document.getElementById("hotelCancelRoom").addEventListener('click', () => {
        hotel.cancelRoom();
        updateHotelRoomsBookedWriteup();
    });
    hotelRoomsBookedWriteup = document.getElementById("hotelRoomsBookedWriteup");
}

function updateHotelRoomsBookedWriteup() {
    hotelRoomsBookedWriteup.innerHTML = hotel.roomsBookedWriteup;
}

function setResortButtonEventHandlers() {
    resortBookRoom = document.getElementById("resortBookRoom").addEventListener('click', () => {
        resort.bookRoom();
        updateResortRoomsBookedWriteup();
    });
    resortCancelRoom = document.getElementById("resortCancelRoom").addEventListener('click', () => {
        resort.cancelRoom();
        updateResortRoomsBookedWriteup();
    });
    resortRoomsBookedWriteup = document.getElementById("resortRoomsBookedWriteup");
}

function updateResortRoomsBookedWriteup() {
    resortRoomsBookedWriteup.innerHTML = resort.roomsBookedWriteup;
}



/* CARD CONSTRUCTION */
function displayHotelCard() {
    let card = `<div class="card col-md-9 col-lg-6 mx-auto mt-2">
        <div class="card-header">Book Your Room</div>

        <div class="card-body">
            <h2 class="card-title">${hotel.name}</h2>
            <h4 class="text-decoration-underline">Hotel Info</h4>
            <p>The <span class="fw-bold">${hotel.name}</span> is located in <span class="fw-bold">${hotel.city}</span>.</p>
            <p class="mt-3">The available room types are: <span class="fw-bold">${hotel.getRoomTypes()}</span>.</p>
            <p><span class="fw-bold">The Hotel has a shuttle?</span> ${hotel.airportShuttle}</p>
            <p><span class="fw-bold">The Hotel has a swimming pool?</span> ${hotel.swimmingPool}</p>
            ${hotel.restaurantsWriteup}
            <div id="hotelRoomsBookedWriteup">${hotel.roomsBookedWriteup}</div>
            <div class="text-center my-3">
                <button class="btn btn-primary fw-bold me-2" id="hotelBookRoom">Book Room</button>
                <button class="btn btn-danger fw-bold" id="hotelCancelRoom">Cancel Room</button>
            </div>
        </div>
    </div>
    <div class="container text-center mt-3">
        <button class="btn btn-primary" id="showResortInfo">See Our Sister Resort</button>
    </div>`;
    mainContent.innerHTML = card;
    setHotelButtonEventHandlers();

    sisterResortButton = document.getElementById("showResortInfo").addEventListener('click', displayResortCard);
}

function displayResortCard() {
    let card = `<div class="card col-md-9 col-lg-6 mx-auto my-4">
    <div class="card-header">Book Your Suite</div>

    <div class="card-body">
        <h2 class="card-title">${resort.name}</h2>
        <h4 class="text-decoration-underline">Resort Info</h4>
        <p>The <span class="fw-bold">${resort.name}</span> is located in <span class="fw-bold">${resort.city}</span>.</p>
        <p><span class="fw-bold">Is it on the beach?</span> ${resort.beachFront}</p>
        <p><span class="fw-bold">Is there a kids club?</span> ${resort.kidsClub}</p>
        <p><span class="fw-bold">What about a bar?</span> ${resort.bar}</p>
        <div id="resortRoomsBookedWriteup">${resort.roomsBookedWriteup}</div>
        <div class="text-center my-3">
            <button class="btn btn-primary fw-bold me-2" id="resortBookRoom">Book Room</button>
            <button class="btn btn-danger fw-bold" id="resortCancelRoom">Cancel Room</button>
        </div>
    </div>
    </div>`;
    mainContent.innerHTML += card;
    setResortButtonEventHandlers();
    setHotelButtonEventHandlers();
}

let hotel = new Hotel("Cool Hotel","Langford, BC",40,31,true);
hotel.addRestaurant("Doug's Place", "Good Food");
hotel.addRestaurant("The Restaurant", "Restaurant Stuff");
hotel.addRestaurant("Big Kahuna Burger", "Fine Cuisine");
hotel.addRoomType("Single");
hotel.addRoomType("Double");
hotel.addRoomType("Family");

let resort = new Resort("Cool Resort","Tofino, BC",800,351,false);
resort.bar = true;

displayHotelCard();