let domUpdates = {

  // on load functions

  populateTrips(tripsInfo, dayjs) {
    let currentTrip = document.getElementById("currentTrip");
    let pastTrips = document.getElementById("pastTrip");
    let upcomingTrips = document.getElementById("upcomingTrip");
    let pendingTrips = document.getElementById("pendingTrip");

    tripsInfo.forEach(trip => {
      let tripDate = new Date(trip.date);
      let dateDisplay = tripDate.toDateString();

      if (trip.tripType === "current") {
        currentTrip.innerHTML +=
        `<div class="trip-card" id="${trip.id}">
          <image class="destination-image" src="${trip.image}"  alt="${trip.alt}"/>
          <div class="card-body">
            <h3 class="trip-desc">You are currently in</h1>
            <h2 class="destination-name" id="${trip.destination}">${trip.destination}</h2>
            <h6 class="trip-date" id="${trip.date}">on ${dateDisplay}</h6>
            <h6 class="trip-date" id="${trip.travelers}">with ${trip.travelers} friends</h6>
          </div>
        </div>`
      } else if (trip.tripType === "pending") {
        pendingTrips.insertAdjacentHTML('afterbegin',
        `<div class="trip-card" id="${trip.id}">
          <image class="destination-image" src="${trip.image}"  alt="${trip.alt}"/>
          <div class="card-body">
            <h3 class="trip-desc">You are hoping to go to</h1>
            <h2 class="destination-name" id="${trip.destination}">${trip.destination}</h2>
            <h6 class="trip-date" id="${trip.date}">on ${dateDisplay}</h6>
            <h6 class="trip-date" id="${trip.travelers}">with ${trip.travelers} friends</h6>
          </div>
        </div>`)
      } else if (trip.tripType === "upcoming") {
        upcomingTrips.insertAdjacentHTML('afterbegin',
        `<div class="trip-card" id="${trip.id}">
          <image class="destination-image" src="${trip.image}"  alt="${trip.alt}"/>
          <div class="card-body">
            <h3 class="trip-desc">You're going to go to</h1>
            <h2 class="destination-name" id="${trip.destination}">${trip.destination}</h2>
            <h6 class="trip-date" id="${trip.date}">on ${dateDisplay}</h6>
            <h6 class="trip-date" id="${trip.travelers}">with ${trip.travelers} friends</h6>
          </div>
        </div>`)
      } else if (trip.tripType === "past") {
        pastTrips.insertAdjacentHTML('afterbegin',
        `<div class="trip-card" id="${trip.id}">
          <image class="destination-image" src="${trip.image}"  alt="${trip.alt}"/>
          <div class="card-body">
            <h3 class="trip-desc">You went to</h1>
            <h2 class="destination-name" id="${trip.destination}">${trip.destination}</h2>
            <h6 class="trip-date" id="${trip.date}">${dateDisplay}</h6>
            <h6 class="trip-date" id="${trip.travelers}">with ${trip.travelers} friends</h6>
          </div>
        </div>`)
      }
    })
  },

  greetTraveler(traveler) {
    const travelerName = document.getElementById("travelerName");
    travelerName.innerHTML = `${traveler.name}!`;
  },

  displayTotalSpent(amount) {
    const totalSpent = document.getElementById("totalSpent");
    totalSpent.innerHTML = `Total spent on trips: $${amount}`;
  },

  // Trip Request Form

  populateFormCalendar() {
    let calendar = document.getElementById("calendar");

    for (let i = 1; i < 32; i++) {
      calendar.insertAdjacentHTML('beforeend',
      `<option class="day-choice" id="dayChoice ${i}">${i}</option>`)
    }
  },

  populateNightsOptions() {
    let nightsOptions = document.getElementById("nightsOptions");

    for (let i = 1; i < 31; i++) {
      nightsOptions.insertAdjacentHTML('beforeend',
      `<option class="travelers-input" value="${i}">${i}</option>`)
    }
  },

  populateTravelersOptions() {
    let travelersOptions = document.getElementById("travelersOptions");

    for (let i = 1; i < 16; i++) {
      travelersOptions.insertAdjacentHTML('beforeend',
      `<option class="travelers-input" value="${i}">${i}</option>`)
    }
  },

  populateDestOptions(destinationNames) {
    let destOptions = document.getElementById("destOptions");

    destinationNames.forEach(destination => {
        destOptions.insertAdjacentHTML('beforeend',
        `<option class="dest-option" value="${destination}">${destination}</option>`)
    })
  },

  displayDateChoice(date) {
    let startDateChoice = document.getElementById("startDateChoice");
    let startDate = new Date(date);
    let dateDisplay = startDate.toDateString();

    startDateChoice.insertAdjacentHTML('beforeend',
    `<h4 class="dest-option" id="startDate ${dateDisplay}">${dateDisplay}</h4>`)
  }


}

export default domUpdates;
