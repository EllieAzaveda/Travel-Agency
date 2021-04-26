import { expect } from 'chai';
import Trip from '../src/trip.js'

let trip;
let tripsData;

describe("Trip", () => {

  beforeEach(() => {
    tripsData = [
      {id: 1, userID: 44, destinationID: 49, travelers: 1, date: "2019/09/16",
        duration: 8, status: "approved", suggestedActivities: ["sight-seeing", "dining"]}
    ];

    trip = new Trip(tripsData[0]);
  });

  it('should be an instance of the trip class', function() {
    expect(trip).to.be.an.instanceOf(Trip);
  });

  it('should have all properties of the Trip object', function() {
    expect(trip.id).to.equal(1);
    expect(trip.userID).to.equal(44);
    expect(trip.destinationID).to.equal(49);
    expect(trip.travelers).to.equal(1);
    expect(trip.date).to.equal("2019/09/16");
    expect(trip.duration).to.equal(8);
    expect(trip.status).to.equal("approved");
    expect(trip.suggestedActivities).to.deep.equal(["sight-seeing", "dining"]);
  });


});
