let domUpdates = {

  populateTrips(tripsInfo) {
    let currentTrip = document.querySelector('.current-trip');
    let upcomingTrips = document.querySelector('.upcoming-trips');
    let pendingTrips = document.querySelector('.pending-trips');
    let pastTrips = document.querySelector('.past-trips');

    console.log("TRIPS OBJECT", tripsInfo);

    tripsInfo.forEach(trip => {
      // let tripDate = dayjs(trip.date).format("MMMM D YYYY");

      if (trip.tripType === "current") {
        currentTrip.innerHTML +=
        `<div class="trip-card" id="${trip.id}">
          <image class="destination-image" src="${trip.image}"  alt="${trip.alt}"/>
          <div class="card-body">
            <h3 class="trip-desc">You went to</h1>
            <h2 class="destination-name" id="${trip.destination}">${trip.destination}</h2>
            <h6 class="trip-date" id="${trip.date}">on ${trip.date}</h6>
          </div>
        </div>`
      } else if (trip.tripType === "pending") {
        pendingTrips.insertAdjacentHTML('afterbegin',
        `<div class="trip-card" id="${trip.id}">
          <image class="destination-image" src="${trip.image}"  alt="${trip.alt}"/>
          <div class="card-body">
            <h3 class="trip-desc">You went to</h1>
            <h2 class="destination-name" id="${trip.destination}">${trip.destination}</h2>
            <h6 class="trip-date" id="${trip.date}">on ${trip.date}</h6>
          </div>
        </div>`)
      } else if (trip.tripType === "upcoming") {
        upcomingTrips.insertAdjacentHTML('afterbegin',
        `<div class="trip-card" id="${trip.id}">
          <image class="destination-image" src="${trip.image}"  alt="${trip.alt}"/>
          <div class="card-body">
            <h3 class="trip-desc">You went to</h1>
            <h2 class="destination-name" id="${trip.destination}">${trip.destination}</h2>
            <h6 class="trip-date" id="${trip.date}">on ${trip.date}</h6>
          </div>
        </div>`)
      } else if (trip.tripType === "past") {
        pastTrips.insertAdjacentHTML('afterbegin',
        `<div class="trip-card" id="${trip.id}">
          <image class="destination-image" src="${trip.image}"  alt="${trip.alt}"/>
          <div class="card-body">
            <h3 class="trip-desc">You went to</h1>
            <h2 class="destination-name" id="${trip.destination}">${trip.destination}</h2>
            <h6 class="trip-date" id="${trip.date}">${trip.date}</h6>
          </div>
        </div>`)
      }
    })

    // function displayHelper() {
    //
    //   traveler.determineTripStatus(currentDate, allTrips);
    // }
  },

  greetTraveler(traveler) {
    const travelerName = document.getElementById('travelerName');
    travelerName.innerHTML = `${traveler.name}!`;
  },

  displayTotalSpent(amount) {
    const totalSpent = document.getElementById('totalSpent');
    totalSpent.innerHTML = `Total spent on trips: $${amount}`;
  }

}

export default domUpdates;
