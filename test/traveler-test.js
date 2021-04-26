import { expect } from 'chai';
import Traveler from '../src/traveler.js'

let traveler;
let tripsData;
let destinationData;

describe("Traveler", () => {

  beforeEach(() => {
    tripsData = [
      {id: 1, userID: 44, destinationID: 49, travelers: 1, date: "2019/09/16",
        duration: 8, status: "approved", suggestedActivities: []},
      {id: 2, userID: 12, destinationID: 1, travelers: 5, date: "2020/05/04",
        duration: 18, status: "approved", suggestedActivities: []},
      {id: 3, userID: 12, destinationID: 2, travelers: 4, date: "2020/10/22",
        duration: 17, status: "approved", suggestedActivities: []},
      {id: 193, userID: 12, destinationID: 3, travelers: 1, date: "2020/11/09",
        duration: 19, status: "approved", suggestedActivities: []},
      {id: 21, userID: 12, destinationID: 4, travelers: 1, date: "2021/01/28",
        duration: 18, status: "pending", suggestedActivities: []}
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
    ]

    traveler = new Traveler(12, "Lannie Heynel", "history buff");
  });

  it('should be an instance of Traveler class', function() {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });

  it('should be able to view all of a specific traveler\'s trips', function() {
    expect(traveler.viewAllTrips(tripsData)).to.deep.equal([
      {id: 2, userID: 12, destinationID: 1, travelers: 5, date: "2020/05/04",
        duration: 18, status: "approved", suggestedActivities: []},
      {id: 3, userID: 12, destinationID: 2, travelers: 4, date: "2020/10/22",
        duration: 17, status: "approved", suggestedActivities: []},
      {id: 193, userID: 12, destinationID: 3, travelers: 1, date: "2020/11/09",
        duration: 19, status: "approved", suggestedActivities: []},
      {id: 21, userID: 12, destinationID: 4, travelers: 1, date: "2021/01/28",
        duration: 18, status: "pending", suggestedActivities: []}
    ])
  });

  it('should tell if a traveler has no trips', function() {
    let traveler2 = new Traveler(1, "Lannie Heynel", "history buff");

    expect(traveler2.viewAllTrips(tripsData)).to.equal("Sorry, no trips found")
  });

  it('should be able to hold all traveler trips', function() {
    traveler.viewAllTrips(tripsData);

    expect(traveler.totalTrips).to.deep.equal([
      {id: 2, userID: 12, destinationID: 1, travelers: 5, date: "2020/05/04",
        duration: 18, status: "approved", suggestedActivities: []},
      {id: 3, userID: 12, destinationID: 2, travelers: 4, date: "2020/10/22",
        duration: 17, status: "approved", suggestedActivities: []},
      {id: 193, userID: 12, destinationID: 3, travelers: 1, date: "2020/11/09",
        duration: 19, status: "approved", suggestedActivities: []},
      {id: 21, userID: 12, destinationID: 4, travelers: 1, date: "2021/01/28",
        duration: 18, status: "pending", suggestedActivities: []}
    ]);
  });

  it('should be able to determine trip status', function() {
    let currentDate = "2020/10/22";
    let travelerTrips = traveler.viewAllTrips(tripsData);
    traveler.determineTripStatus(currentDate, travelerTrips);

    expect(traveler.past).to.deep.equal([{id: 2, userID: 12,
      destinationID: 1, travelers: 5, date: "2020/05/04",
      duration: 18, status: "approved", suggestedActivities: []}]);

    expect(traveler.present).to.deep.equal([{id: 3, userID: 12,
      destinationID: 2, travelers: 4, date: "2020/10/22",
      duration: 17, status: "approved", suggestedActivities: []}]);

    expect(traveler.upcoming).to.deep.equal([{id: 193, userID: 12,
      destinationID: 3, travelers: 1, date: "2020/11/09",
      duration: 19, status: "approved", suggestedActivities: []}]);

    expect(traveler.pending).to.deep.equal([{id: 21, userID: 12,
      destinationID: 4, travelers: 1, date: "2021/01/28",
      duration: 18, status: "pending", suggestedActivities: []}]);
  });

  it('should be able to calculate total spent plus agent fee', function() {
    traveler.viewAllTrips(tripsData);

    expect(traveler.calculateTotalSpent(destinationData)).to.equal("8101.50");
  })

});
