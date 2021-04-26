import './css/base.scss';
// import '../images/airplane-icon.png'

import {fetchData, postData} from './api.js'
import domUpdates from './domUpdates';
import Destination from './destination'
import Traveler from './traveler';
import TravelersRepo from './travelersRepo'
import TripRequest from './trip-request'
import Trip from './trip'


let travelersArray;
let tripsArray;
let destinationArray;
let traveler;
let userTrips;
let currentDate = "2020/10/22";


window.addEventListener('load', onStartUp);


function onStartUp() {
  fetchData()
    .then(totalData => {
      travelersArray = totalData.travelerData.travelers;
      tripsArray = totalData.tripsData.trips;
      destinationArray = totalData.destinationData.destinations;

    let travelerId = (Math.floor(Math.random() * 49) + 1)
    let newTraveler = travelersArray.find(traveler => {
      return traveler.id === Number(travelerId)
    })
    traveler = new Traveler(newTraveler.id, newTraveler.name,
      newTraveler.travelerType)
    userTrips = traveler.viewAllTrips(tripsArray);

    domUpdates.greetTraveler(traveler);
    showTotalSpent();
    showTripsCards();
  })
}

function showTotalSpent() {
  let totalSpent = traveler.calculateTotalSpent(destinationArray);
  domUpdates.displayTotalSpent(totalSpent);
}

function showTripsCards() {
  let parsedDate = Date.parse(currentDate);

  let tripsInfo = userTrips.reduce((arr, trip) => {
    let tripDate = Date.parse(trip.date);
    let tripObj = {};

    destinationArray.forEach(destination => {
      if (trip.destinationID === destination.id) {
        if (trip.status === "approved" && tripDate < parsedDate) {
          tripObj["tripType"] = "past";
        } else if (trip.status === "approved" && tripDate === parsedDate) {
          tripObj["tripType"] = "current";
        } else if (trip.status === "approved" && tripDate > parsedDate) {
          tripObj["tripType"] = "upcoming";
        } else if (trip.status === "pending") {
          tripObj["tripType"] = "pending";
        }
      tripObj["id"] = destination.id;
      tripObj["destination"] = destination.destination;
      tripObj["image"] = destination.image;
      tripObj["alt"] = destination.alt;
      tripObj["travelers"] = trip.travelers;
      tripObj["date"] = trip.date;
      }
    })
    arr.push(tripObj);
    return arr;
  }, []);

  domUpdates.populateTrips(tripsInfo);
}
