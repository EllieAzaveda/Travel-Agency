class Traveler {
  constructor(id, name, travelerType) {
    this.id = id;
    this.name = name;
    this.type = travelerType;
  }

  viewAllTrips(data) {
    let allTrips = data.reduce((arr, trip) => {
      if (trip.userID === this.id) {
        arr.push(trip);
      }
      return arr;
    }, [])

    return !allTrips.length ? "Sorry, no trips found" : allTrips;
  };

}

export default Traveler;
