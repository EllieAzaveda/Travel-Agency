import { expect } from 'chai';
import AllTravelers from '../src/all-travelers.js'

let allTravelers;
let travelersData;

describe("AllTravelers", () => {

  beforeEach(() => {
    travelersData = [
      {id: 1, name: "Ham Leadbeater", travelerType: "relaxer"},
      {id: 2, name: "Rachael Vaughten", travelerType: "thrill-seeker"},
      {id: 3, name: "Sibby Dawidowitsch", travelerType: "shopper"},
      {id: 4, name: "Leila Thebeaud", travelerType: "photographer"},
      {id: 5, name: "Tiffy Grout", travelerType: "thrill-seeker"},
      {id: 6, name: "Laverna Flawith", travelerType: "shopper"}
    ];

    allTravelers = new AllTravelers(travelersData);
  });

  it('should be an instance of Pantry class', function() {
    expect(allTravelers).to.be.an.instanceOf(AllTravelers);
  });

  it('should be able to find a specific traveler', function() {
    expect(allTravelers.findSpecificTraveler(2)).to.deep.equal(
      {id: 2, name: "Rachael Vaughten", travelerType: "thrill-seeker"}
    )
  });

  it('should be able to tell if a specific traveler doesn\'t exist', function() {
    expect(allTravelers.findSpecificTraveler(51)).to.deep.equal("Sorry, no traveler found")
  });

});
