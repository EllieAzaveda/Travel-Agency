class Traveler {
  constructor(id, name, travelerType) {
    this.id = id;
    this.name = name;
    this.type = travelerType;
    this.totalTrips = [];
    this.past = [];
    this.present = [];
    this.upcoming = [];
    this.pending = [];
    this.totalSpent = 0;
    this.agentFee = 0;
  }

  viewAllTrips(data) {
    let allTrips = data.reduce((arr, trip) => {
      if (trip.userID === this.id) {
        arr.push(trip);
      }
      return arr;
    }, [])
    this.totalTrips = allTrips;
    return !allTrips.length ? "Sorry, no trips found" : allTrips;
  }

  determineTripStatus(date) {
    // NEED TO ADD DAY.JS HERE TO MATCH DATES

    this.totalTrips.forEach(trip => {
      if (trip.status === "approved" && trip.date < date) {
        // && trip.date < date
        this.past.push(trip);
      } else if (trip.status === "approved" && trip.date === date) {
        this.present.push(trip);
      } else if (trip.status === "approved" && trip.date > date) {
        // && trip.date > date
        this.upcoming.push(trip);
      } else if (trip.status === "pending") {
        this.pending.push(trip);
      }
    })
  }

  calculateTotalSpent(data) {
    let tripsTotal = this.totalTrips.reduce((total, trip) => {
      data.forEach(place => {
        if (place.id === trip.destinationID) {
          total += (place.estimatedLodgingCostPerDay
            + place.estimatedFlightCostPerPerson) * trip.travelers;
        }
      })
      return total;
    }, 0)
    let agentFee = tripsTotal * 0.1;
    return tripsTotal + agentFee;
  }

}

export default Traveler;
