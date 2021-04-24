class Trip {
  constructor(trip) {
    this.id = trip.id;
    this.userID = trip.userID;
    this.destinationID = trip.destinationID;
    this.travelers = trip.travelers;
    this.date = trip.date;
    this.duration = trip.duration;
    this.status = trip.status;
    this.suggestedActivities = trip.suggestedActivities;
  }

  makeTripRequest() {
    // Takes a date, duration, # of travelers,
    // choose from list of destinations
  }

  calculateEstimatedCost() {
    // +10% agent fee
  }

  updateStatus() {
    
  }

}

export default Trip;
