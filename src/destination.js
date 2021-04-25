class Destination {
  constructor(destination) {
    this.id = destination.id;
    this.destination = destination.destination;
    this.estLodgingCost = destination.estimatedLodgingCostPerDay;
    this.estFlightCost = destination.estimatedFlightCostPerPerson;
    this.image = destination.image;
    this.alt = destination.alt;
  }

  findAllDestinations(destinationData) {
    return destinationData.map(dest => dest.destination).sort();
  }

}

export default Destination;
