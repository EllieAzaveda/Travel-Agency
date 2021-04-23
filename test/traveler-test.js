import { expect } from 'chai';
import Traveler from '../src/traveler.js'

let traveler;
let tripsData;

describe("AllTravelers", () => {

  beforeEach(() => {
    tripsData = [
      {id: 1, userID: 44, destinationID: 49, travelers: 1, date: "2019/09/16", duration: 8, status: "approved", suggestedActivities: []},
      {id: 2, userID: 35, destinationID: 25, travelers: 5, date: "2020/10/04", duration: 18, status: "pending", suggestedActivities: []},
      {id: 3, userID: 3, destinationID: 22, travelers: 4, date: "2020/05/22", duration: 17, status: "pending", suggestedActivities: []},
      {id: 193, userID: 12, destinationID: 35, travelers: 1, date: "2020/11/09", duration: 19, status: "approved", suggestedActivities: []},
      {id: 21, userID: 12, destinationID: 10, travelers: 1, date: "2020/01/28", duration: 18, status: "approved", suggestedActivities: []}
    ];

    traveler = new Traveler(12, "Lannie Heynel", "history buff");
  });

  it('should be an instance of Traveler class', function() {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it('should be able to view all trips', function() {
    expect(traveler.viewAllTrips(tripsData)).to.deep.equal([
      {id: 193, userID: 12, destinationID: 35, travelers: 1, date: "2020/11/09", duration: 19, status: "approved", suggestedActivities: []},
      {id: 21, userID: 12, destinationID: 10, travelers: 1, date: "2020/01/28", duration: 18, status: "approved", suggestedActivities: []}
    ])
  });

  it('should tell if a traveler has no trips', function() {
    let traveler2 = new Traveler(1, "Lannie Heynel", "history buff");

    expect(traveler2.viewAllTrips(tripsData)).to.equal("Sorry, no trips found")
  });

});
