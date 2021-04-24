import { expect } from 'chai';
import Destination from '../src/destination.js'

let destination;
let tripsData;
let destinationData;

describe("Trip", () => {

  beforeEach(() => {
    tripsData = [
      {id: 1, userID: 44, destinationID: 49, travelers: 1, date: "2019/09/16",
        duration: 8, status: "approved", suggestedActivities: []},
      {id: 2, userID: 35, destinationID: 25, travelers: 5, date: "2020/10/04",
        duration: 18, status: "pending", suggestedActivities: []},
      {id: 3, userID: 3, destinationID: 22, travelers: 4, date: "2020/05/22",
        duration: 17, status: "pending", suggestedActivities: []},
      {id: 4, userID: 43, destinationID: 14, travelers: 2, date: "2020/02/25",
        duration: 10, status: "approved", suggestedActivities: []},
      {id: 5, userID: 42, destinationID: 29, travelers: 3, date: "2020/04/30",
        duration: 18, status: "approved", suggestedActivities: []},
      {id: 6, userID: 29, destinationID: 35, travelers: 3, date: "2020/06/29",
        duration: 9, status: "approved", suggestedActivities: []}
    ];

    destinationData = [
      {id: 1, destination: "Lima, Peru", estimatedLodgingCostPerDay: 70,
        estimatedFlightCostPerPerson: 400, image: "https://images.un.com/1489",
        alt: "overview of city buildings with a clear sky"},
      {id: 2, destination: "Stockholm, Sweden",
        estimatedLodgingCostPerDay: 100, estimatedFlightCostPerPerson: 780,
        image: "https://images.un.com/1560", alt: "city with boats"},
      {id: 3, destination: "Sydney, Austrailia",
        estimatedLodgingCostPerDay: 130, estimatedFlightCostPerPerson: 950,
        image: "https://images.un.com/1506", alt: "opera house"},
      {id: 4, destination: "Cartagena, Colombia",
        estimatedLodgingCostPerDay: 65, estimatedFlightCostPerPerson: 350,
        image: "https://images.un.com/1558", alt: "boats"}
    ];

    destination = new Destination(destinationData[0]);
  });


});
