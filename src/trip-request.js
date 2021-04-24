class TripRequest {
  constructor() {

  }

  findSpecificTrip(tripsData, id) {
    let foundTrip = {};

    tripsData.find(trip => {
      if (Object.values(trip).includes(id)) {
        foundTrip = trip;
        return foundTrip;
      } else {
        foundTrip = "Sorry, no trip found";
      }
    })
    return foundTrip;
  }

}

export default TripRequest;
