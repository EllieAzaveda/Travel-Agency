let domUpdates = {

  // on load functions

  populateTrips(tripsInfo, dayjs) {
    let currentTrip = document.getElementById("currentTrip");
    let pastTrips = document.getElementById("pastTrips");
    let upcomingTrips = document.getElementById("upcomingTrips");
    let pendingTrips = document.getElementById("pendingTrips");

    tripsInfo.forEach(trip => {
      let tripDate = new Date(trip.date);
      let dateDisplay = tripDate.toDateString();

      if (trip.tripType === "current") {
        currentTrip.innerHTML +=
        `<div class="trip-card" id="${trip.id}">
          <image class="destination-image" src="${trip.image}"  alt="${trip.alt}"/>
          <div class="card-body">
            <p class="trip-desc">You are currently in</p>
            <p class="destination-name" id="${trip.destination}">${trip.destination}</p>
            <p class="trip-date trip-desc" id="${trip.date}">on ${dateDisplay}</p>
            <p class="trip-travelers trip-desc" id="${trip.travelers}">with ${trip.travelers} friends</p>
          </div>
        </div>`
      } else if (trip.tripType === "pending") {
        pendingTrips.insertAdjacentHTML('afterbegin',
        `<div class="trip-card" id="${trip.id}">
          <image class="destination-image" src="${trip.image}"  alt="${trip.alt}"/>
          <div class="card-body">
            <p class="trip-desc">You are hoping to go to</p>
            <p class="destination-name" id="${trip.destination}">${trip.destination}</p>
            <p class="trip-date trip-desc" id="${trip.date}">on ${dateDisplay}</p>
            <p class="trip-travelers trip-desc" id="${trip.travelers}">with ${trip.travelers} friends</p>
          </div>
        </div>`)
      } else if (trip.tripType === "upcoming") {
        upcomingTrips.insertAdjacentHTML('afterbegin',
        `<div class="trip-card" id="${trip.id}">
          <image class="destination-image" src="${trip.image}"  alt="${trip.alt}"/>
          <div class="card-body">
            <p class="trip-desc">You're going to go to</p>
            <p class="destination-name" id="${trip.destination}">${trip.destination}</p>
            <p class="trip-date trip-desc" id="${trip.date}">on ${dateDisplay}</p>
            <p class="trip-travelers trip-desc" id="${trip.travelers}">with ${trip.travelers} friends</p>
          </div>
        </div>`)
      } else if (trip.tripType === "past") {
        pastTrips.insertAdjacentHTML('afterbegin',
        `<div class="trip-card" id="${trip.id}">
          <image class="destination-image" src="${trip.image}"  alt="${trip.alt}"/>
          <div class="card-body">
            <p class="trip-desc">You went to</p>
            <p class="destination-name" id="${trip.destination}">${trip.destination}</p>
            <p class="trip-date trip-desc" id="${trip.date}">${dateDisplay}</p>
            <p class="trip-travelers trip-desc" id="${trip.travelers}">with ${trip.travelers} friends</p>
          </div>
        </div>`)
      }
    })
  },

  greetTraveler(traveler) {
    const welcomeGreeting = document.getElementById("welcomeGreeting");
    welcomeGreeting.insertAdjacentHTML('beforeend',
    `<h3 class="traveler-name" id="travelerName ${traveler.name}">${traveler.name}</h3>`)

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
  },

  displayPendingTrips(dest, pendingTrip) {
    let pendingTrips = document.getElementById("pendingTrips");

    pendingTrips.insertAdjacentHTML('afterbegin',
    `<div class="trip-card" id="${pendingTrip.id}">
      <image class="destination-image" src="${dest.image}"  alt="${dest.alt}"/>
      <div class="card-body">
        <p class="trip-desc">You are hoping to go to</p>
        <p class="destination-name" id="${dest.destination}">${dest.destination}</p>
        <p class="trip-date trip-desc" id="${pendingTrip.date}">on ${pendingTrip.date}</p>
        <p class="trip-travelers trip-desc" id="${pendingTrip.travelers}">with ${pendingTrip.travelers} friends</p>
      </div>
    </div><br>`)
  },

  displayEstCost(dest, pendingTrip) {
    let estCost = document.getElementById("estCost");
    estCost.innerHTML = " ";

    let totalPerDay = (dest.estimatedLodgingCostPerDay +
      dest.estimatedFlightCostPerPerson) * pendingTrip.travelers;
    let tripsTotal = totalPerDay * pendingTrip.duration;
    let agentFee = tripsTotal * 0.1;

    let estimatedCost = tripsTotal + agentFee;

    estCost.innerHTML += `Your trip request has been submitted!
    The estimated cost of this trip is: $${estimatedCost}`
  },

}

export default domUpdates;
