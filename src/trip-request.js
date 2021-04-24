class TripRequest {
  constructor(tripsData, destinationData) {
    this.tripsData = tripsData;
    this.destinationData = destinationData;
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

  findSpecificDestination(name) {
    console.log(name);
    return this.destinationData.find(destination => {
     if (Object.values(destination).includes(name)) {
       return destination;
     } else {
       return "Sorry, no trip found";
     }
   })
  }

  addDate() {

  }

  addDuration() {

  }

  addNumOfTravelers() {

  }

  findSpecificDestination() {

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
