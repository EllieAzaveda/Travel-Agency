import { expect } from 'chai';
import AllTravelers from './src/all-travelers.js'

let allTravelers;

describe("AllTravelers", () => {

  beforeEach(() => {
    let travelersData = [
      {"id":1, "name":"Ham Leadbeater", "travelerType":"relaxer"},
      {"id":2, "name":"Rachael Vaughten", "travelerType":"thrill-seeker"},
      {"id":3, "name":"Sibby Dawidowitsch", "travelerType":"shopper"},
      {"id":4, "name":"Leila Thebeaud", "travelerType":"photographer"},
      {"id":5, "name":"Tiffy Grout", "travelerType":"thrill-seeker"},
      {"id":6, "name":"Laverna Flawith", "travelerType":"shopper"}
    ];

    allTravelers = new AllTravelers(travelersData);
  });

  it.only('should be an instance of Pantry class', function() {
    expect(allTravelers).to.be.an.instanceOf(AllTravelers);
  });



});
