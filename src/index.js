import './css/base.scss';
import './images/airplane-icon.png'

import {fetchData, postNewTrip} from './api.js'
import domUpdates from './domUpdates';
import Destination from './destination'
import Traveler from './traveler';
import TravelersRepo from './travelersRepo'
import TripRequest from './trip-request'
import Trip from './trip'
import dayjs from 'dayjs';

let travelersArray;
let tripsArray;
let destinationArray;
let traveler;
let userTrips;
let tripRequest;
let currentDate = new Date("2020/10/22");

const nights = document.getElementById("nightsOptions");
const travelers = document.getElementById("travelersOptions");
const destination = document.getElementById("destOptions");
const startDate = document.getElementById("startDate");
const submitButton = document.getElementById("submitButton");
const airplaneIcon = document.getElementById("airplaneIcon");
const tripRequestAside = document.getElementById("tripRequestAside");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("submitCredentials");

window.addEventListener("load", onStartUp);

submitButton.addEventListener("click", saveTripRequest);
airplaneIcon.addEventListener("click", toggleBookTrip);
loginButton.addEventListener("click", verifyCredentials);

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
    tripRequest = new TripRequest(tripsArray, destinationArray);

    starterHelper();
  })
}

function starterHelper() {
  domUpdates.greetTraveler(traveler);
  showTotalSpent();
  showTripsCards();
  generateFormOptions();
}

function verifyCredentials() {
  usernameInput
  passwordInput

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

function generateFormOptions() {
  let destinationNames = tripRequest.findAllDestinations(destinationArray);
  domUpdates.populateNightsOptions();
  domUpdates.populateTravelersOptions();
  domUpdates.populateDestOptions(destinationNames);
}

function saveTripRequest() {
  let tripRequestData = makeTripRequest();
  postNewTrip(tripRequestData);
}

function makeTripRequest() {
  let nightsNum = parseInt(nights.value);
  let travelersNum = parseInt(travelers.value);
  let destID = destinationArray.find(dest => dest.destination === destination.value)
  let newID = tripsArray.length + 1;

   let pendingTrip = {
    id: newID,
    userId: traveler.id,
    destinationID: destID.id,
    travelers: travelersNum,
    date: startDate.value,
    duration: nightsNum,
    status: "pending",
    suggestedActivities: [],
  }
  domUpdates.displayPendingTrips(destID, pendingTrip);
  domUpdates.displayEstCost(destID, pendingTrip);
  return pendingTrip;
}

function toggleBookTrip() {
  if (tripRequestAside.classList.contains('hidden')) {
    tripRequestAside.classList.toggle('hidden');
  } else {
    tripRequestAside.classList.toggle('hidden');
    tripRequestAside.setAttribute('aria-hidden', 'true');
  }
}
