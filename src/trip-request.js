import Trip from '../src/trip.js'

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

  findAllDestinations(destinationData) {
    return destinationData.map(dest => dest.destination).sort();
  }

  matchDestination(name) {
    return this.destinationData.find(destination => {
      if (Object.values(destination).includes(name)) {
        this.destination = destination.id;
        return this.destination;
      } else {
        return "Sorry, no destination found";
      }
    })
  }

// Needs a test
  addDateToRequest(date) {
    let tripDate = new Date(date);
    this.startDate = tripDate;
  }

  // Needs a test
  addDurationToRequest(duration) {
    this.duration = duration;
  }

  addTravelersToRequest(numTravelers) {
    this.numOfTravelers = numTravelers;
  }

  updateStatus() {
    this.status = "pending";
  }

  makeTripRequest(date, nightsNum, numTravelers) {
    this.status = "pending";
    this.numOfTravelers = numTravelers;
    this.duration = nightsNum;
    this.startDate = date;
  }

  calculateEstimatedCost(destination, travelers, duration) {
    let totalPerDay = (destination.estimatedLodgingCostPerDay +
      destination.estimatedFlightCostPerPerson) * travelers;
    let tripsTotal = totalPerDay * duration;
    let agentFee = tripsTotal * 0.1;

    let estimatedCost = tripsTotal + agentFee;
    return estimatedCost;
  }

}

export default TripRequest;
