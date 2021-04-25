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

  determineTripStatus(date, tripsArray) {
    let parsedDate = Date.parse(date);
    this.totalTrips = tripsArray;

    tripsArray.forEach(trip => {
      let tripDate = Date.parse(trip.date);

      if (trip.status === "approved" && tripDate < parsedDate) {
        this.past.push(trip);
      } else if (trip.status === "approved" && tripDate === parsedDate) {
        this.present.push(trip);
      } else if (trip.status === "approved" && tripDate > parsedDate) {
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
    let finalAmount = tripsTotal + agentFee;
    return finalAmount.toFixed(2);
  }

}

export default Traveler;
