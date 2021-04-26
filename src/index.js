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
      domUpdates.greetTraveler(traveler);
      displayTravelerTrips();
      // domUpdates.populateTrips(traveler, destinationArray);
      console.log(traveler)
    })
}

function displayTravelerTrips() {
  let allTrips = traveler.viewAllTrips(tripsArray);
  traveler.determineTripStatus(currentDate, allTrips);
}
