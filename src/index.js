import './css/base.scss';
import './images/airplane-icon.png'
import './images/plane-ticket.png'

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
const loginButton = document.getElementById("submitCredentials");
const loginPage = document.getElementById("loginPage");
const dashboard  = document.getElementById("dashboard");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");

window.addEventListener("load", onStartUp);

submitButton.addEventListener("click", makeTripRequest);
airplaneIcon.addEventListener("click", toggleBookTrip);
loginButton.addEventListener("click", verifyCredentials);

// Login Functions

function verifyCredentials() {
  let userInput = usernameInput.value
  let allUsernames = [];
  for (let i = 1; i < 51; i++) {
    allUsernames.push(`traveler${i}`);
  };

  let foundUserName = allUsernames.find(username => username === userInput);

  if (foundUserName && passwordInput.value === "travel2020") {
    confirmLogin();
    return findTraveler(foundUserName);
  } else {
    domUpdates.displayLoginError();
  }
}

function findTraveler(foundUserName) {
  let username = usernameInput.value
  let travelerID;

  if (username.length === 9) {
    travelerID = username.slice(-1);
  } else {
    travelerID = username.slice(-2);
  };
  return travelerID;
}

function toggleMainView() {
  dashboard.classList.remove('hidden');
  loginPage.classList.add('hidden');
}

function onStartUp() {
  fetchData()
    .then(totalData => {
      travelersArray = totalData.travelerData.travelers;
      tripsArray = totalData.tripsData.trips;
      destinationArray = totalData.destinationData.destinations;
    })
}

function confirmLogin() {
  let travelerID = findTraveler();
  let idNum = parseInt(travelerID);
  let newTraveler = travelersArray.find(traveler => {
    return traveler.id === idNum
  })

  traveler = new Traveler(newTraveler.id, newTraveler.name,
    newTraveler.travelerType)
  userTrips = traveler.viewAllTrips(tripsArray);
  tripRequest = new TripRequest(tripsArray, destinationArray);

  starterHelper();
  toggleMainView();
}

// Dashboard Display

function starterHelper() {
  domUpdates.greetTraveler(traveler);
  showTotalSpent();
  showTripsCards();
  generateFormOptions();
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

// Trip Request Functions

function generateFormOptions() {
  let destinationNames = tripRequest.findAllDestinations(destinationArray);
  domUpdates.populateNightsOptions();
  domUpdates.populateTravelersOptions();
  domUpdates.populateDestOptions(destinationNames);
}

function makeTripRequest() {
  let nightsNum = parseInt(nights.value);
  let travelersNum = parseInt(travelers.value);
  let destID = destinationArray.find(dest => dest.destination === destination.value)
  let newID = tripsArray.length + 1;

   let pendingTrip = {
    id: newID,
    userID: traveler.id,
    destinationID: destID.id,
    travelers: travelersNum,
    date: startDate.value.split('-').join('/'),
    duration: nightsNum,
    status: "pending",
    suggestedActivities: [],
  }
  console.log(pendingTrip)
  postNewTrip(pendingTrip)
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
