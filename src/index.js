// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image
// (also need to link to it in the index.html)
import './images/turing-logo.png'

import {fetchData, postData} from './api.js'
import domUpdates from './domUpdates';
import Traveler from './traveler';
import TravelersRepo from './travelersRepo.js'

let travelersArray;
let tripsArray;
let destinationArray;
let traveler;

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
      traveler = new Traveler(newTraveler.id, newTraveler.name, newTraveler.travelerType)
      domUpdates.greetUser(traveler);
    console.log(traveler)
    })
}
