import { expect } from 'chai';
import TripRequest from '../src/trip-request.js'

let tripRequest;
let tripsData;
let destinationData;


describe("TripRequest", () => {

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

    tripRequest = new TripRequest(tripsData, destinationData);
  });

  it('should be an instance of the TripRequest class', function() {
    expect(tripRequest).to.be.an.instanceOf(TripRequest);
  });

  it('should be able to find a specific trip', function() {
    expect(tripRequest.findSpecificTrip(1)).to.deep.equal({id: 1, userID: 44,
      destinationID: 49, travelers: 1, date: "2019/09/16", duration: 8,
      status: "approved", suggestedActivities: []})
  });

  it('should be able to find a specific destination', function() {
    expect(tripRequest.matchDestination("Lima, Peru")).to.deep.equal(
      {id: 1, destination: "Lima, Peru", estimatedLodgingCostPerDay: 70,
        estimatedFlightCostPerPerson: 400, image: "https://images.un.com/1489",
        alt: "overview of city buildings with a clear sky"})
  });

  it('should be able to update a trip request destination', function() {
    tripRequest.matchDestination("Lima, Peru");

    expect(tripRequest.destination).to.deep.equal(1)
  });

  it('should be able to update trip request info', function() {
    tripRequest.makeTripRequest("2021/04/26", 8, 2);

    expect(tripRequest.startDate).to.equal('2021/04/26');
    expect(tripRequest.duration).to.equal(8);
    expect(tripRequest.numOfTravelers).to.equal(2);
  });

  it('should update status after submitting a trip request', function() {
    tripRequest.updateStatus();
    expect(tripRequest.status).to.equal("pending");
  });

  it('should be able to calculate cost of trip with agent fee', function() {
    expect(tripRequest.calculateEstimatedCost({id: 1, destination: "Lima, Peru", estimatedLodgingCostPerDay: 70,
      estimatedFlightCostPerPerson: 400, image: "https://images.un.com/1489",
      alt: "overview of city buildings with a clear sky"}, 8, 2)).to.equal(8272);
  });


  it('should be able to show all destinations in abc order', function() {
    expect(tripRequest.findAllDestinations(destinationData)).to.deep.equal([
      "Cartagena, Colombia", "Lima, Peru",
      "Stockholm, Sweden", "Sydney, Austrailia"
    ]);
  });

});
