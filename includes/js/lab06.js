class Hotel {
    /* PRIVATE FIELDS */
    #name; // hotel name (string)
    #city; // hotel location (string)
    #rooms; // total room amount (number)
    #booked; // booked room amount (number)
    #gym; // does it have a gym? (boolean)

    #roomTypes = []; // (array of strings)
    #airportShuttle; // does the hotel have a shuttle? (boolean)
    #restaurants = []; // An array of key-value pairs with restaurant name (key) and restaurant type (value) | (map)
    #swimmingPool; // does it have a swimming pool? (boolean)
    
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

    hasPool() {
        if (this.#swimmingPool) console.log("The hotel has a pool!");
        else console.log("No pool :(");
    }

    bookRoom() {
        if (this.#booked >= this.#rooms) console.log(`No rooms available. 40/40`);
        else {
            this.#booked++;
            console.log(`Room booked. ${this.#booked}/${this.#rooms}`);
        }
    }

    cancelRoom() {
        if (this.#booked < 1) console.log(`No rooms to cancel. 0/40`);
        else {
            this.#booked--;
            console.log(`Room canceled. ${this.#booked}/${this.#rooms}`);
        }
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
    #resortType; // What type of resort? (singles, family,...) (string)
    #beachFront; // is it on the beach? (boolean)
    #kidsClub; // does it have a kids club? (boolean)
}


/* Interacting with DOM */
const mainContent = document.getElementById("mainContent");

/* CARD CONSTRUCTION */
function displayHotelCard() {
    let card = `<div class="card">
        <div class="card-header">Book Your Room</div>

        <div class="card-body">
            <h2 class="card-title">${hotel.name}</h2>
            <h4 class="text-decoration-underline">Hotel Info</h4>
            <p>The <span class="fw-bold">${hotel.name}</span> is located in <span class="fw-bold">${hotel.city}</span>.</p>
            <p class="mt-3">The available room types are: <span class="fw-bold">${hotel.getRoomTypes()}</span>.</p>
        </div>
    </div>`;
    mainContent.innerHTML = card;
}


let hotel = new Hotel("Cool Hotel","Langford, BC",40,31,true);
hotel.addRestaurant("Doug's Place", "Good Food");
hotel.addRoomType("Single");
hotel.addRoomType("Double");
hotel.addRoomType("Family");

let resort = new Resort("Cool Resort","Tofino, BC",800,351,false);
resort.addRestaurant("Big Kahuna Burger", "Fine Cuisine");

displayHotelCard();