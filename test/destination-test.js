import { expect } from 'chai';
import Destination from '../src/destination.js'

let destination;
let destinationData;


describe("Destination", () => {

  beforeEach(() => {
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

  it('should be an instance of the Destination class', function() {
    expect(destination).to.be.an.instanceOf(Destination);
  });

  it('should have all properties of the Destination object', function() {
    expect(destination.id).to.equal(1);
    expect(destination.destination).to.equal("Lima, Peru");
    expect(destination.estLodgingCost).to.equal(70);
    expect(destination.estFlightCost).to.equal(400);
    expect(destination.image).to.equal("https://images.un.com/1489");
    expect(destination.alt).to.equal("overview of city buildings with a clear sky");
  });

  it('should be able to show all destinations in abc order', function() {
    expect(destination.findAllDestinations(destinationData)).to.deep.equal([
      "Cartagena, Colombia", "Lima, Peru",
      "Stockholm, Sweden", "Sydney, Austrailia"
    ]);
  });

});
