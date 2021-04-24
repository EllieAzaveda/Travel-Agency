class TripRequest {
  constructor(tripsData, destinationData) {
    this.tripsData = tripsData;
    this.destinationData = destinationData;
    this.startDate = 0;
    this.duration = 0;
    this.numOfTravelers = 0;
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
        this.destination = destination;
        return destination;
      } else {
        return "Sorry, no destination found";
      }
    })
    return foundDestination;
  }

  makeTripRequest(date, duration, numTravelers) {
    let parsedDate = Date.parse(date);
    this.startDate = parsedDate;
    this.duration = duration;
    this.numOfTravelers = numTravelers;
  }

  updateStatus() {
    this.status = "pending";
  }

  calculateEstimatedCost() {
    let totalPerDay = (this.destination.estimatedLodgingCostPerDay +
      this.destination.estimatedFlightCostPerPerson) * this.numOfTravelers;
    let tripsTotal = totalPerDay * this.duration;
    let agentFee = tripsTotal * 0.1;

    this.estimatedCost = tripsTotal + agentFee;
    return tripsTotal + agentFee;
  }

}

export default TripRequest;
