let domUpdates = {

  // populateTrips(traveler, destinations) {
  //     let currentTrips = document.querySelector('.current-trips');
  //     let upcomingTrips = document.querySelector('.upcoming-trips');
  //     let pendingTrips = document.querySelector('.pending-trips');
  //     let pastTrips = document.querySelector('.past-trips');
  //
  //     destinations.forEach(destination => {
  //       if(trip.destinationID === destination.id) {
  //         traveler.present.forEach(travelerTrip => {
  //           currentTrips.insertAdjacentHTML('afterbegin',
  //             `<div class="trip-card" id="${travelerTrip.id}">
  //               <image class="destination-image" src="${destination.image}" alt="${destination.alt}"/>
  //               <div class="card-body">
  //                 <h3 class="trip-desc">You went to</h1>
  //                 <h2 class="destination-name" id="${destination.destination}">${destination.destination}</h2>
  //                 <h6 class="trip-date" id="${travelerTrip.travelers}">${travelerTrip.date}</h6>
  //               </div>
  //           </div>`)
  //         })
  //         traveler.upcoming.forEach(travelerTrip => {
  //           currentTrips.insertAdjacentHTML('afterbegin',
  //             `<div class="trip-card" id="${travelerTrip.id}">
  //               <image class="destination-image" src="${destination.image}" alt="${destination.alt}"/>
  //               <div class="card-body">
  //                 <h3 class="trip-desc">You went to</h1>
  //                 <h2 class="destination-name" id="${destination.destination}">${destination.destination}</h2>
  //                 <h6 class="trip-date" id="${travelerTrip.travelers}">${travelerTrip.date}</h6>
  //             </div>
  //         </div>`)
  //         })
  //         traveler.pending.forEach(travelerTrip => {
  //           pendingTrips.insertAdjacentHTML('afterbegin',
  //             `<div class="trip-card" id="${travelerTrip.id}">
  //               <image class="destination-image" src="${destination.image}" alt="${destination.alt}"/>
  //               <div class="card-body">
  //                 <h3 class="trip-desc">You went to</h1>
  //                 <h2 class="destination-name" id="${destination.destination}">${destination.destination}</h2>
  //                 <h6 class="trip-date" id="${travelerTrip.travelers}">${travelerTrip.date}</h6>
  //               </div>`
  //           </div>`)
  //         })
  //         traveler.past.forEach(trip => {
  //           pastTrips.insertAdjacentHTML('afterbegin',
  //             `<div class="trip-card" id="${travelerTrip.id}">
  //               <image class="destination-image" src="${destination.image}" alt="${destination.alt}"/>
  //               <div class="card-body">
  //                 <h3 class="trip-desc">You went to</h1>
  //                 <h2 class="destination-name" id="${destination.destination}">${destination.destination}</h2>
  //                 <h6 class="trip-date" id="${travelerTrip.travelers}">${travelerTrip.date}</h6>
  //               </div>`
  //           </div>`)
  //         })
  //       })
  //     })
  //   },

  greetTraveler(traveler) {
    const travelerName = document.getElementById('travelerName');
    travelerName.innerHTML = `${traveler.name}!`;
  },

}

export default domUpdates;
