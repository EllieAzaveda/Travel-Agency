import { expect } from 'chai';
import TravelersRepo from '../src/travelersRepo.js'

let travelersRepo;
let travelersData;

describe("TravelersRepo", () => {

  beforeEach(() => {
    travelersData = [
      {id: 1, name: "Ham Leadbeater", travelerType: "relaxer"},
      {id: 2, name: "Rachael Vaughten", travelerType: "thrill-seeker"},
      {id: 3, name: "Sibby Dawidowitsch", travelerType: "shopper"},
      {id: 4, name: "Leila Thebeaud", travelerType: "photographer"},
      {id: 5, name: "Tiffy Grout", travelerType: "thrill-seeker"},
      {id: 6, name: "Laverna Flawith", travelerType: "shopper"}
    ];

    travelersRepo = new TravelersRepo(travelersData);
  });

  it('should be an instance of AllTravelers class', function() {
    expect(travelersRepo).to.be.an.instanceOf(TravelersRepo);
  });

  it('should be able to find a specific traveler', function() {
    expect(travelersRepo.findSpecificTraveler(2)).to.deep.equal(
      {id: 2, name: "Rachael Vaughten", travelerType: "thrill-seeker"}
    )
  });

  it('should tell if a traveler doesn\'t exist', function() {
    expect(travelersRepo.findSpecificTraveler(51)).to.deep.equal(
      "Sorry, no traveler found")
  });

});
