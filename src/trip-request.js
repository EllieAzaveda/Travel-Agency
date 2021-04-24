class TripRequest {
  constructor(tripsData, destinationData) {
    this.tripsData = tripsData;
    this.destinationData = destinationData;
    this.startDate = 0;
    this.duration = 1;
    this.numOfTravelers = 1;
    this.destination = "";
    this.estimatedCost = 0;
    this.status = "available";
  }

  findSpecificTrip(id) {
     return this.tripsData.find(trip => {
      if (Object.values(trip).includes(id)) {
        return trip;
      } else {
        return "Sorry, no trip found";
      }
    })
  }

  matchDestination(name) {
    let foundDestination = this.destinationData.find(destination => {
      if (Object.values(destination).includes(name)) {
        return destination;
      } else {
        return "Sorry, no destination found";
      }
    })
    return foundDestination;
  }

  addDate(date) {
    let parsedDate = Date.parse(date);
    return this.startDate = parsedDate;
  }

  addDuration() {

  }

  addNumOfTravelers() {

  }

  makeTripRequest() {
  //   // Takes a date, duration, # of travelers,
  //   // choose from list of destinations
  }

  calculateEstimatedCost() {
  //   // +10% agent fee
  }

  updateStatus() {
  //
  }

}

export default TripRequest;
